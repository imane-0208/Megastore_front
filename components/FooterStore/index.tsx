import React, { FC } from "react";
import Link from "next/link";
import { ProfileCard } from "../ProfileCard";

type Props = {
  primaryColor: string;
  store?: boolean;
};

const FooterStore: FC<Props> = ({ primaryColor, store }) => {
  return (
    <div
      className={`p-5 mb-5 border-black mt-4 rounded-md ${
        store ? "" : "border-4 border-dashed"
      }`}
    >
      <div className="w-full">
        {!store ? (
          <h3 className="text-2xl">footer</h3>
        ) : (
          <h3 className="text-2xl font-black">MEGASTORE</h3>
        )}
        <div className="flex justify-between  items-center p-2 w-[800px] h-fit">
          <div className={`container bg-grey-lighter ${store ? "" : "p-8"}`}>
            <div className="sm:flex mb-4">
              <div className="sm:w-1/4 h-auto">
                <div className="text-orange mb-2">Orange</div>
                <ul className="list-reset leading-normal">
                  <li className="hover:text-orange text-grey-darker">One</li>
                  <li className="hover:text-orange text-grey-darker">Two</li>
                  <li className="hover:text-orange text-grey-darker">Three</li>
                  <li className="hover:text-orange text-grey-darker">Four</li>
                  <li className="hover:text-orange text-grey-darker">Five</li>
                  <li className="hover:text-orange text-grey-darker">Six</li>
                  <li className="hover:text-orange text-grey-darker">Seven</li>
                  <li className="hover:text-orange text-grey-darker">Eight</li>
                </ul>
              </div>
              <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
                <div className="text-blue mb-2">Blue</div>
                <ul className="list-reset leading-normal">
                  <li className="hover:text-blue text-grey-darker">One</li>
                  <li className="hover:text-blue text-grey-darker">Two</li>
                  <li className="hover:text-blue text-grey-darker">Three</li>
                </ul>

                <div className="text-blue-light mb-2 mt-4">Blue-light</div>
                <ul className="list-reset leading-normal">
                  <li className="hover:text-blue-light text-grey-darker">
                    One
                  </li>
                  <li className="hover:text-blue-light text-grey-darker">
                    Two
                  </li>
                  <li className="hover:text-blue-light text-grey-darker">
                    Three
                  </li>
                </ul>
              </div>
              <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
                <div className="text-green-dark mb-2">Green-dark</div>
                <ul className="list-reset leading-normal">
                  <li className="hover:text-green-dark text-grey-darker">
                    One
                  </li>
                  <li className="hover:text-green-dark text-grey-darker">
                    Two
                  </li>
                  <li className="hover:text-green-dark text-grey-darker">
                    Three
                  </li>
                </ul>

                <div className="text-green-light mb-2 mt-4">Green-light</div>
                <ul className="list-reset leading-normal">
                  <li className="hover:text-green-light text-grey-darker">
                    One
                  </li>
                  <li className="hover:text-green-light text-grey-darker">
                    Two
                  </li>
                  <li className="hover:text-green-light text-grey-darker">
                    Three
                  </li>
                </ul>
              </div>
              <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
                <div className="text-red-light mb-2">Newsletter</div>
                <p className="text-grey-darker leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Commodi, consectetur.{" "}
                </p>
                <div className="mt-4 flex">
                  <input
                    type="text"
                    className="p-2 border border-grey-light round text-grey-dark text-sm h-auto"
                    placeholder="Your email address"
                  />
                  <button
                    style={{
                      backgroundColor: primaryColor,
                    }}
                    className="bg-orange text-white rounded-sm h-auto text-xs p-3"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ProfileCard />
        </div>
        <div className="w-full flex  justify-center">
          <span>
            all rights reserved to &nbsp;
          <Link href="/" passHref>
            <b className="hover:text-blue-700 cursor-pointer">MEGASTORE&copy;</b>
          </Link>
          </span>
          &nbsp;
          &nbsp;
          <Link href="/Seller" passHref>
            <b className="hover:text-blue-700 cursor-pointer">Create a store (always free)</b>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FooterStore;

FooterStore.defaultProps = {
  primaryColor: "#ff0000",
  store: false,
};
