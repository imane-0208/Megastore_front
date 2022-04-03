import React, { FC, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { Switch } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { storage } from "../../firebase/index.js";
import { PrimaryBtn } from "@/components/PrimaryBtn";
import SaveIcon from "@mui/icons-material/Save";
import CircularProgress from "@mui/material/CircularProgress";
import CheckIcon from "@mui/icons-material/Check";

type Props = {
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  color: string;
  imageSrc: string;
};

export const PopupStore: FC<Props> = ({
  color,
  setPopup,
  imageSrc,
}) => {

  useEffect(() => {
    console.log(imageSrc);
  }, [imageSrc]);
  



  return (
    <div className="fixed popup z-40 top-0 left-0  w-full h-screen bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <span className="absolute top-0 right-0 cursor-pointer m-4">
        <PrimaryBtn
          className="hover:bg-red-100"
          onClick={() => setPopup(false)}
        >
          <CloseIcon />
        </PrimaryBtn>
      </span>
      <motion.div
        initial={{ opacity: 0, y: -100, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        style={{
          border: `4px solid ${color}`,
        }}
        className={`p-5 rounded h-[80vh] bg-white relative shadow-xl 0 transition-all mt-4 border-4 border-solid`}
      >
        <div
          style={{
            backgroundImage: `url('${imageSrc}')`,
          }}
          className={` relative h-full bg-cover bg-center flex justify-items-center items-center`}
        >
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
              onClick={() => setPopup(false)}
            >
              Shop Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
