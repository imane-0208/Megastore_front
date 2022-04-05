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
  useEffect(() => {
    console.log(popupOption);
  }, [popupOption]);

  const [progress, setProgress] = useState(0);
  const [imageAsFile, setImageAsFile] = useState(null);
  const [changeImage, setChangeImage] = useState(false);
  const [imageIsLoading, setImageIsLoading] = useState(false);

  const handleFireBaseUpload = (e: any) => {
    e.preventDefault();
    console.log(imageAsFile);
    setImageIsLoading(true);

    if (!imageAsFile) {
      return alert("Please select an image");
    } else {
      // @ts-ignore
      const storageRef = ref(storage, `/files/${imageAsFile?.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageAsFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
            setImageSrc(url);
            setChangeImage(true);
            setTimeout(() => {
              setImageIsLoading(false);
            }, 1200);
          });
        }
      );
    }
  };

  const handleChange = (e: any) => {
    // @ts-ignore
    if (e?.target?.files[0]) {
      // @ts-ignore
      const image = e?.target?.files[0];
      setImageAsFile((imageFile) => image);
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
    }
  };

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
        className={`p-5 rounded h-[80vh] bg-white relative shadow-xl border-gray-700 0 transition-all mt-4 border-4 border-dashed  ${
          !popupOption ? "opacity-20" : ""
        }`}
      >
        {imageIsLoading && (
          <div className="w-full flex justify-center items-center h-full absolute z-20 bg-opacity-70 bg-black top-0 left-0">
            {progress === 0 && (
              <CircularProgress
                size={100}
                sx={{
                  color: color,
                }}
              />
            )}
            {progress !== 0 && (
              <CheckIcon
                sx={{
                  color: color,
                  fontSize: "10rem",
                }}
              />
            )}
          </div>
        )}
        <div
          style={{
            backgroundImage: `url('${imageSrc}')`,
            opacity: popupOption ? 1 : 0.2,
          }}
          className={` relative h-full bg-cover bg-center flex justify-items-center items-center`}
        >
          <div className="w-full absolute top-3 right-2 flex justify-end">
            <Switch
              onChange={() => setPopupOption(!popupOption)}
              name="checked"
              inputProps={{ "aria-label": "secondary checkbox" }}
              checked={popupOption}
            />
            <label
              htmlFor="imageFile"
              className="rounded-full p-2 cursor-pointer bg-gray-100 hover:bg-red-200 w-fit h-fit"
            >
              <ImageIcon />
            </label>
            <input
              type="file"
              id="imageFile"
              className="hidden"
              onChange={handleChange}
            />
            <div onClick={handleFireBaseUpload}>
              <PrimaryBtn className="ml-2">
                <SaveIcon />
              </PrimaryBtn>
            </div>
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
