"use client"

import Link from "next/link";
import { Sidebar as FSidebar } from "flowbite-react";
import { SignOutButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import {
  HiUser,
  HiArrowSmRight,
  HiChartPie
} from "react-icons/hi";

const Sidebar = () => {
  const { user, isSignedIn } = useUser();
  if (!isSignedIn) return null;

  return (
    <FSidebar className="w-full mb-10 dark:bg-gray-900">
      <FSidebar.Items className="w-full flex flex-wrap items-center justify-between dark:bg-gray-900 px-5 pb-6 pt-2">
        <FSidebar.ItemGroup className="flex flex-col gap-1">
          {user?.publicMetadata?.isAdmin ? (
            <Link href="/dashboard">
              <FSidebar.Item
                icon={HiChartPie}
                as="div"
              >
                Dashboard
              </FSidebar.Item>
            </Link>
          ) : null}
          <FSidebar.Item
            icon={HiUser}
            label={user?.publicMetadata?.isAdmin ? "Admin" : "User"}
            labelColor="dark"
            as="div"
            className="bg-teal-300/50 dark:bg-gray-700"
          >
            {user.username}
          </FSidebar.Item>
          <FSidebar.Item icon={HiArrowSmRight} className="cursor-pointer hover:bg-teal-300 dark:hover:bg-gray-800 transition-all">
            <SignOutButton />
          </FSidebar.Item>
        </FSidebar.ItemGroup>
        <FSidebar.ItemGroup className="flex flex-wrap items-center">
          <Link href="/dashboard/create" className="py-3 px-4 rounded-lg bg-teal-400 hover:bg-teal-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all">
            Create New Post
          </Link>
        </FSidebar.ItemGroup>
      </FSidebar.Items>
    </FSidebar>
  );
}
 
export default Sidebar;