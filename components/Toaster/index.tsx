import React , {useEffect} from "react";
import * as said from "@/lottie/said.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { LinearProgress } from "@mui/material";

const Toaster = ({ text }: { text: string }) => {

    // progress bar each 500 ms
    const [progress, setProgress] = React.useState(100);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setProgress(progress - 10);
        }, 350);
        return () => clearInterval(interval);
    }, [progress]);


  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, x: 230 }}
      animate={{ scale: 1, opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="fixed bottom-0 right-0 min-w-fit m-4 p-4 bg-blue-100  rounded-lg shadow-lg"
    >
      <div className="-ml-10 -mt-10 w-24 h-24">
        <Lottie animationData={said} loop={true} height={100} width={100} />
      </div>
      <span>
        {text?.split("\n")?.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </span>
      <LinearProgress
        className="mt-4"
        variant="determinate"
        value={progress}
        color="primary"
        />
    </motion.div>
  );
};

export default Toaster;
