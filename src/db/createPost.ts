import { redirect } from "next/navigation";
import { db } from "@/db";
import { posts } from "@/db/schema";

export async function createPost(formData:FormData) {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    await db.insert(posts).values({ title, content });
    redirect("/");
  }