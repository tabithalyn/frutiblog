import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl">
          Welcome to Frutiblog
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Discover a variety of articles and tutorials on topics such as web development, software engineering, and programming languages, all brought to you through a blog built with Next.js and{" "}
          <a
            href="https://go.clerk.com/fgJHKlt"
            className="text-teal-500 hover:underline"
            target="_blank"
          >
            Clerk
          </a>
          .
        </p>
      </div>
      <div className="p-3 flex flex-col gap-8 py-7">
        <Link
          href={"/dashboard"}
          className="text-lg text-teal-500 hover:underline text-center"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
