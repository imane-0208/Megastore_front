import React, { FC, useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import StoreIcon from "@mui/icons-material/Store";
import Badge from "@mui/material/Badge";
import Link from "next/link";
import { useRouter } from "next/router";
import EditIcon from "@mui/icons-material/Edit";
import { PrimaryBtn } from "../PrimaryBtn";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  setLoginPopup: (e: any) => void;
  title?: string;
};
const Header: FC<Props> = ({ setLoginPopup, title }) => {
  const [becameSeller, setBecameSeller] = useState(true);
  const [user, setUser] = useState<any>(false);

  const Router = useRouter();

  const handleBecameSeller = () => {
    let localUser = localStorage?.getItem("user");
    //get user from local storage
    if (localUser) {
      setUser(JSON.parse(localUser));
    }

    if (user) {
      // @ts-ignore
      if (user.store.id === Router?.query?.slug[0]) {
        setBecameSeller(false);
      }
    }
  };

  useEffect(() => {
    handleBecameSeller();
  }, []);

  return (
    <>
      <div className="header flex p-5 justify-between">
        <div className="header__logo">
          <h2 className="text-2xl font-black hover:text-blue-500 transition-all cursor-pointer">
            MEGASTORE × {title}
          </h2>
        </div>
        <div className="ml-36">
          <div className="flex justify-center items-center text-gray-600">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className="bg-white hover:shadow-lg transition-all w-[500px] h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
            />
            <label
              htmlFor="search"
              className="-ml-10 rounded-full hover:border-gray-300 transition-all border-2 border-white border-solid p-1 cursor-pointer"
            >
              <SearchIcon />
            </label>
          </div>
        </div>
        <div className=" flex gap-3 ">
          {becameSeller ? (
            <Link href="/Seller" passHref={true}>
              <button className="p-2 rounded-full hover:bg-blue-50 hover:text-blue-500 transition-all bg-blue-500 text-white px-4">
                <span>Became a seller</span>
                <StoreIcon className=" " />
              </button>
            </Link>
          ) : (
            <Link
              href="/Personalise/store/[slug]"
              as={`/Personalise/store/${user?.store?.id}`}
              passHref
            >
              <PrimaryBtn>
                edit store &nbsp;
                <EditIcon />
              </PrimaryBtn>
            </Link>
          )}

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

export default Header;

Header.defaultProps = {
  title: "MEGASTORE",
};
