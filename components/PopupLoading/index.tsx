import React, { FC } from "react";
import Lottie from "lottie-react";
import * as loading from "@/lottie/saidLoading.json";
import {motion} from "framer-motion";

type Props = {
  setPopupLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PopupLoading: FC<Props> = ({ setPopupLoading }) => {
  return (
    <div className="fixed  flex-col popup z-40 top-0 left-0  w-full h-screen bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
        <Lottie animationData={loading} loop={true} height={400} width={400} />
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-2xl font-bold bg-blue-500 rounded-sm p-3"
        >
          Your changes are being saved. Please wait...
        </motion.div>
    </div>
  );
};
