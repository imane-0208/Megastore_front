import React, { FC } from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const PrimaryBtn: FC<Props> = ({ children, className, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
      className={`rounded-full transition-all p-2 cursor-pointer bg-gray-100 hover:bg-green-200 w-fit h-fit ${className}`}
    >
      <span>{children}</span>
    </motion.button>
  );
};

PrimaryBtn.defaultProps = {
  className: "",
  onClick: () => {},
};
