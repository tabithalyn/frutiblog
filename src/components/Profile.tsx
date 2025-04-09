"use client"

import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const Profile = () => {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center items-center w-full">
      <UserProfile
        appearance={{
          baseTheme: theme === "dark" ? dark : undefined
        }}
        routing="hash"
      />
    </div>
  );
}
 
export default Profile;