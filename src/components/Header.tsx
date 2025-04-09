"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Button, Navbar } from "flowbite-react";
import { dark } from "@clerk/themes";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const path = usePathname();

  return (
    <Navbar className="p-5">
      <Link
        href="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Fruti
        </span>
        Blog
      </Link>
      <div className="flex gap-2 md:order-2">
        <Button
          className="hidden sm:inline cursor-pointer border-0"
          color={theme === "light" ? "light" : "dark"}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <HiOutlineSun /> : <HiOutlineMoon />}
        </Button>
        <SignedIn>
          <div className="flex flex-wrap items-center justify-center">
            <UserButton
              appearance={{
                baseTheme: theme === "light" ? undefined : dark
              }}
              userProfileUrl="/dashboard"
            />
          </div>
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        </SignedOut>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link href="/">
          <Navbar.Link active={path === "/"} as={"div"}>
            Home
          </Navbar.Link>
        </Link>
        <Link href="/" className="ml-5">
          <Navbar.Link active={path === "/about"} as={"div"}>
            About
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
 
export default Header;