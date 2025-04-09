import Posts from "@/components/Posts";
import Sidebar from "@/components/Sidebar";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const DashboardPage = () => {

  return (
    <div className="flex flex-wrap p-10 w-full dark:bg-gray-900">
      <Sidebar />
      <h1 className="w-full text-center text-4xl font-bold mb-10 border-b-2 border-b-teal-500 pb-4">Posts</h1>
      <SignedIn>
        <Posts />
      </SignedIn>
      <SignedOut>
        Sign in to view your posts.
      </SignedOut>
    </div>
  );
}
 
export default DashboardPage;