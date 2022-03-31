import Image from "next/image";
import React from "react";
import LogoDashbord from "@/public/images/logoDash.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0 flex flex-row">
          <div className="h-10 w-10 self-center mr-2">
            <Image
              className="h-10 w-10 self-center"
              src={LogoDashbord}
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <a
              href="/home"
              className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
            >
              LogoText
            </a>
            <br />
            <span className="text-xs text-grey-dark">
              Beautiful New Tagline
            </span>
          </div>
        </div>
        <div className="sm:mb-0 self-center">
          <a
            href="#"
            className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1"
          >
            Link1
          </a>
          <a
            href="#"
            className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"
          >
            Link2
          </a>
          <a
            href="/two"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"
          >
            Link3
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
