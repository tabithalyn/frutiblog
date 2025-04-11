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
    <FFooter className="bg-transparent absolute bottom-0 left-1 h-1/6 w-[97%] bg-linear-to-b from-white/40 to-white/10 mx-5 rounded-[60px] backdrop-blur-md border-t border-t-white border-b border-b-gray-700 boxShadow1">
      <div className="w-[85%] max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              href="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold text-gray-800 dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-b from-[#7def81] via-[#54dd48] to-[#c0fac8] rounded-2xl text-white border border-[#66e677]">
                Fruti
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <span className="font-extrabold text-sm text-gray-800 uppercase">
                About
              </span>
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
        <FFooter.Divider style={{ margin: "10px 0" }} />
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