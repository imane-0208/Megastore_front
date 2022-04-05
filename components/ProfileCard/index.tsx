import { Badge } from "@mui/material";
import React from "react";

export const ProfileCard = () => {
  return (
    <div className="rounded-md shadow-md ml-5">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-md  w-full h-20" />

      <div>
        <div className="text-center mt-[-44px]">
          <span className="border-4  border-white rounded-full mx-auto inline-block">
            <Badge
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                background: "#ff0000"
                }}
              badgeContent={<span className="text-white">Pro</span>}
            >
              <img
                className="rounded-full w-20 h-20"
                src="https://randomwordgenerator.com/img/picture-generator/51e6dc41434faa0df7c5d57bc32f3e7b1d3ac3e455517349762f72d794_640.jpg"
                alt="profile"
              />
            </Badge>
          </span>
        </div>
        <p className="text-center">
          <span className="font-bold">James Bodan</span> <span>26</span>
        </p>
        <p className="text-xs text-center mb-5">Sumatera</p>
        <hr />
        <div className="flex justify-between  px-10 py-5">
          <div className="text-center mx-3">
            <p className="font-bold">90</p>
            <p className="text-xs">Likes</p>
          </div>
          <div className="text-center">
            <p className="font-bold">5</p>
            <p className="text-xs">Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};
