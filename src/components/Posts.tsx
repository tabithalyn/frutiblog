import Link from "next/link";
import { desc } from "drizzle-orm";
import { db } from "@/db";
import { posts } from "@/db/schema";

const Posts = async () => {
  const allPosts = await db
    .select()
    .from(posts)
    .orderBy(desc(posts.createdAt));

  return (
    <div className="gap-5 flex flex-wrap justify-center w-full mb-10">
      {allPosts.map((post) => (
        <div key={post.id} className="border p-4 rounded w-2/5 dark:bg-gray-800">
          <Link href={`/post/${post.id}`}>
            <h2 className="text-xl font-semibold hover:text-blue-500">
              {post.title}
            </h2>
          </Link>
          <p className="text-gray-600">
            {new Date(post.createdAt).toLocaleDateString()}
            {post.updatedAt > post.createdAt && `
              (Updated ${new Date(post.updatedAt).toLocaleDateString()})
            `}
          </p>
          <p className="mt-2">
            {post.content.substring(0, 150)}....
          </p>
          <div className="mt-2">
            <Link href={`/post/${post.id}`} className="text-blue-500 mr-2">
              Read More
            </Link>
            <Link href={`/dashboard/edit/${post.id}`} className="text-blue-500 mr-2">
              Edit
            </Link>
            <Link href={`/dashboard/delete/${post.id}`} className="text-red-500">
              Delete
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default Posts;