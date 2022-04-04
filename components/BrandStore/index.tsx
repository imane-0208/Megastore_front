import { Skeleton, Switch } from "@mui/material";
import React, { FC } from "react";

type Props = {
  setBrands: React.Dispatch<React.SetStateAction<boolean>>;
  brands: boolean;
};

export const BrandStore: FC<Props> = ({ setBrands, brands }) => {
  return (
    <div
      className={`p-5 border-gray-700 hover:bg-blue-50 hover:bg-opacity-30 transition-all mt-4 border-4 border-dashed rounded-md ${
        brands ? "opacity-20" : ""
      }`}
    >
      <div className="w-full flex justify-end">
        <Switch
          onChange={() => setBrands(!brands)}
          name="checked"
          inputProps={{ "aria-label": "secondary checkbox" }}
          checked={!brands}
        />
      </div>
      <div className="w-full">
        <h3 className="text-2xl">Our brands</h3>
      </div>
      <div className="flex justify-between items-center p-2 w-[800px] h-44 ">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div className="flex items-center flex-col" key={i}>
              <div  className="bg-gray-200 px-4 pb-3">
                <Skeleton className=" w-24 h-24 mt-0" animation={"wave"} />
              </div>
              <Skeleton className="h-full w-24" animation={"wave"} />
            </div>
          ))}
      </div>
    </div>
  );
};
