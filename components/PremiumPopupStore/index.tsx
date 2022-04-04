import React, { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

type Props = {
  setPopupPremium: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PremiumPopupStore: FC<Props> = ({ setPopupPremium }) => {
  return (
    <div className="fixed popup z-40 top-0 left-0  w-full h-screen bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <span className="absolute top-0 right-0 cursor-pointer text-2xl m-4">
        <CloseIcon onClick={() => setPopupPremium(false)} />
      </span>
      <motion.div
        initial={{ opacity: 0, y: -100, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
      className="min-h-[90vh] p-4 rounded-sm bg-white flex justify-center items-center">
        <div className="">
          <div className="text-center font-semibold">
            <h1 className="text-5xl">
              <span className="text-[gold] tracking-wide">Premium </span>
              <span>Features</span>
            </h1>
          </div>
          <div className="pt-24 flex flex-row">
            <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
              <h1 className="text-black font-semibold text-2xl">Basic</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">10</span>
                <span className="text-gray-400 font-medium">/ user</span>
              </p>
              <hr className="mt-4 border-1" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    Get started with{" "}
                    <span className="text-black">messaging</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    Flexible <span className="text-black">team meetings</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    <span className="text-black">5 TB</span> cloud storage
                  </span>
                </p>

                <a href="#" className="">
                  <p className="w-full py-4 bg-[gold] mt-8 rounded-xl text-white">
                    <span className="font-medium">Choose Plan</span>
                  </p>
                </a>
              </div>
            </div>
            <div className="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
              <h1 className="text-white font-semibold text-2xl">Startup</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">24</span>
                <span className="text-gray-400 font-medium">/ user</span>
              </p>
              <hr className="mt-4 border-1 border-gray-600" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    All features in <span className="text-white">Basic</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    Flexible <span className="text-white">call scheduling</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    <span className="text-white">15 TB</span> cloud storage
                  </span>
                </p>

                <a href="#" className="">
                  <p className="w-full py-4 bg-[gold] mt-8 rounded-xl text-white">
                    <span className="font-medium">Choose Plan</span>
                  </p>
                </a>
              </div>
              <div className="absolute top-4 right-4">
                <p className="bg-[gold] font-semibold px-4 py-1 rounded-full uppercase text-xs">
                  Popular
                </p>
              </div>
            </div>
            <div className="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
              <h1 className="text-black font-semibold text-2xl">Enterprise</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">35</span>
                <span className="text-gray-400 font-medium">/ user</span>
              </p>
              <hr className="mt-4 border-1" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    All features in <span className="text-black">Startup</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    Growth <span className="text-black">oriented</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    <span className="text-black">Unlimited</span> cloud storage
                  </span>
                </p>

                <a href="#" className="">
                  <p className="w-full py-4 bg-[gold] mt-8 rounded-xl text-white">
                    <span className="font-medium">Choose Plan</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
