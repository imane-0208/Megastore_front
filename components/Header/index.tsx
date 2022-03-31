import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import StoreIcon from "@mui/icons-material/Store";
import Badge from "@mui/material/Badge";
import Link from "next/link";

export const Header = ({
  setLoginPopup,
}: {
  setLoginPopup: (value: boolean) => void;
}) => {
  return (
    <>
      <div className="header flex p-5 justify-between">
        <div className="header__logo">
          <h2 className="text-2xl font-black hover:text-blue-500 transition-all cursor-pointer">
            MEGASTORE
          </h2>
        </div>
        <div className="">
          <ul className="header__menu-list flex gap-3">
            <li className="header__menu-item">
              <a href="#">Home</a>
            </li>
            <li className="header__menu-item">
              <a href="#">About</a>
            </li>
            <li className="header__menu-item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className=" flex gap-3 ">
          <Link href="/Seller" passHref={true}>
            <button className="p-2 rounded-full bg-blue-400 px-4">
              <span>Became a seller</span>
              <StoreIcon className=" hover:text-blue-500 transition-all cursor-pointer" />
            </button>
          </Link>
          <button className="">
            <Badge badgeContent={4} color="primary">
              <CircleNotificationsIcon className=" hover:text-blue-500 transition-all cursor-pointer" />
            </Badge>
          </button>
          <button className="" onClick={() => setLoginPopup(true)}>
            <AccountCircleIcon className=" hover:text-blue-500 transition-all cursor-pointer" />
          </button>
        </div>
      </div>
    </>
  );
};
