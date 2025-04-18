import { headers } from "next/headers";
import { Webhook } from "svix";
import { clerkClient } from "@clerk/nextjs/server";
import { createOrUpdateUser, deleteUser } from "@/lib/actions/user";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(req: { json: () => any; }) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  const headerPayload = headers();
  const svix_id = (await headerPayload).get("svix-id");
  const svix_timestamp = (await headerPayload).get("svix-timestamp");
  const svix_signature = (await headerPayload).get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no svix headers", {
      status: 400
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt = {
    data: {
      id: "",
      first_name: "",
      last_name: "",
      image_url: "",
      email_addresses: [{
        email_address: ""
      }],
      username: ""
    },
    type: ""
  };

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature
    });
  } catch (error) {
    console.log("Error verifying webhook: ", error);
    return new Response("Error occurred", { status: 400 });
  }

  const { id } = evt?.data;
  const eventType = evt?.type;
  console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
  console.log("Webhook body: ", body);

  if (eventType === "user.created" || eventType === "user.updated") {
    const { id, first_name, last_name, image_url, email_addresses, username } = evt?.data;

    try {
      const user = await createOrUpdateUser(
        id,
        first_name,
        last_name,
        image_url,
        email_addresses,
        username
      );
      if (user && eventType === "user.created") {
        try {
          await (await clerkClient()).users.updateUserMetadata(id, {
            publicMetadata: {
              userMongoId: user._id,
              isAdmin: user.isAdmin
            }
          });
        } catch (error) {
          console.log("Error updating user metadata: ", error);
        }
      }
    } catch (error) {
      console.log("Error creating or updating user: ", error);
      return new Response("Error occurred", { status: 400 });
    }
  }

  if (eventType === "user.deleted") {
    const { id } = evt?.data;
    try {
      await deleteUser(id);
    } catch(error) {
      console.log("Error deleting user: ", error);
      return new Response("Error occurred", { status: 400 });
    }
  }

  return new Response("", { status: 200 });
}