"use client"

import { Footer as FFooter } from "flowbite-react";
import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub
} from "react-icons/bs";

const Footer = () => {
  return (
    <FFooter className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              href="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Fruti
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FFooter.Title title="About" />
              <FFooter.LinkGroup col>
                <FFooter.Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FrutiBlog
                </FFooter.Link>
              </FFooter.LinkGroup>
            </div>
            <div>
              <FFooter.Title title="Follow Us" />
              <FFooter.LinkGroup col>
                <FFooter.Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </FFooter.Link>
                <FFooter.Link href="#">Discord</FFooter.Link>
              </FFooter.LinkGroup>
            </div>
            <div>
              <FFooter.Title title="Legal" />
              <FFooter.LinkGroup col>
                <FFooter.Link href="#">Privacy Policy</FFooter.Link>
                <FFooter.Link href="#">Terms &amp; Conditions</FFooter.Link>
              </FFooter.LinkGroup>
            </div>
          </div>
        </div>
        <FFooter.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FFooter.Copyright
            href="#"
            by="FrutiBlog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <FFooter.Icon href="#" icon={BsFacebook} />
            <FFooter.Icon href="#" icon={BsInstagram} />
            <FFooter.Icon href="#" icon={BsTwitter} />
            <FFooter.Icon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </FFooter>
  );
}
 
export default Footer;