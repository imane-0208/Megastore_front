import React, { FC, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { Switch } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

type Props = {
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setPopupOption: React.Dispatch<React.SetStateAction<boolean>>;
  setImageSrc: React.Dispatch<React.SetStateAction<string>>;
  color: string;
  imageSrc: string;
  popupOption: boolean;
};

export const PopupStore: FC<Props> = ({
  color,
  setPopup,
  popupOption,
  setPopupOption,
  setImageSrc,
    imageSrc,
}) => {


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // @ts-ignore
      if(e.target.files[0]){
          // @ts-ignore
        const file = e?.target?.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImageSrc(reader.result as string);
        };
    }
  };

  return (
    <div className="fixed popup z-40 top-0 left-0  w-full h-screen bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <span className="absolute top-0 right-0 cursor-pointer text-2xl m-4">
        <CloseIcon onClick={() => setPopup(false)} />
      </span>
      <motion.div
        initial={{ opacity: 0, y: -100, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        className={`p-5 rounded h-[80vh] bg-white shadow-xl border-gray-700 0 transition-all mt-4 border-4 border-dashed  ${
          popupOption ? "opacity-20" : ""
        }`}
      >
        <div
          style={{
            backgroundImage: `url('${imageSrc}')`,
          }}
          className={` relative h-full bg-cover bg-center flex justify-items-center items-center ${
            popupOption ? "opacity-20" : ""
          }`}
        >
          <div className="w-full absolute top-3 right-2 flex justify-end">
            <Switch
              onChange={() => setPopupOption(!popupOption)}
              name="checked"
              inputProps={{ "aria-label": "secondary checkbox" }}
              checked={!popupOption}
            />
            <label htmlFor="imageFile" className="rounded-full p-2 cursor-pointer bg-gray-100 hover:bg-red-200 w-fit h-fit">
              <ImageIcon />
            </label>
            <input type="file"
            id="imageFile"
            className="hidden"
            onChange={handleChange}
            />
          </div>
          <div className="px-10 min-w-[800px]">
            <h1 className="text-6xl font-semibold font-serif mb-6">
              <span
                style={{
                  color: `${color}`,
                }}
              >
                Sale 20% Off
              </span>{" "}
              <br />
              <span
                style={{
                  color: `${color}`,
                }}
              >
                On Everything
              </span>
            </h1>
            <p className="text-lg max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, urna eu tincidunt consectetur, nisl urna
              congue nunc, eget porttitor nisl nisi eu nisl.
            </p>
            <motion.button
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="inline-block mt-10 px-10 py-3 text-lg  text-white font-semibold"
              style={{ background: color }}
            >
              Shop Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
