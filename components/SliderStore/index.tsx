import React, { FC, useEffect, useState } from "react";
import { Switch } from "@mui/material";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { storage } from "../../firebase/index.js";
import HomeSlider from "../HomeSlider";
import { PrimaryBtn } from "../PrimaryBtn";
import Close from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";

type Props = {
  setSlider: React.Dispatch<React.SetStateAction<boolean>>;
  slider: boolean;
  slider_image: string[];
  setSliderImages: React.Dispatch<React.SetStateAction<string[]>>;
  setPopupPremium: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SliderStore: FC<Props> = ({
  slider,
  setSlider,
  slider_image,
  setSliderImages,
  setPopupPremium
}) => {
  const [progress, setProgress] = useState(0);
  const [imageAsFile, setImageAsFile] = useState(null);
  const [imageIsLoading, setImageIsLoading] = useState(false);

  //ref to input
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFireBaseUpload = () => {
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
            setSliderImages([...slider_image, url]);
            setTimeout(() => {
              setImageIsLoading(false);
            }, 1200);
          });
        }
      );
    }
  };

  useEffect(() => {
    if (imageAsFile) {
      handleFireBaseUpload();
    }
  }, [imageAsFile]);

  const handleChange = async (e: any) => {
    // @ts-ignore
    if (e?.target?.files[0]) {
      // @ts-ignore
      const image = e?.target?.files[0];
      setImageAsFile((imageFile) => image);
    }
  };

  useEffect(() => {
    console.log(slider_image);
  }, [slider_image]);

  const handleRemoveImage = (index: number) => {
    const newSliderImages = [...slider_image];
    newSliderImages.splice(index, 1);
    setSliderImages(newSliderImages);
  };

  return (
    <div
      className={`p-5 border-black border-4 border-dashed rounded-md ${
        slider ? "opacity-20" : ""
      }`}
    >
      <div className="w-full flex justify-end">
        <Switch
          onChange={() => setSlider(!slider)}
          name="checked"
          inputProps={{ "aria-label": "secondary checkbox" }}
          checked={!slider}
        />
      </div>
      <div className="flex justify-between items-center p-4 w-[800px] h-72 bg-white shadow-lg">
        <HomeSlider images={slider_image} />
      </div>
      <div className="flex gap-3 mt-3">
        {slider_image?.map((_, i) => (
          <div
            style={{
              backgroundImage: `url(${
                _.length > 0
                  ? _
                  : "https://firebasestorage.googleapis.com/v0/b/megastore-58b93.appspot.com/o/files%2Fabout-us-best-products.png?alt=media&token=d868cccc-b9a8-488d-99d5-94316b7e2386"
              })`,
            }}
            className="p-10 px-16 bg-gray-200 bg-center bg-cover rounded border-2 border-dashed  "
            key={i}
          >
            {slider_image.length > 1 && (
              <PrimaryBtn onClick={() => handleRemoveImage(i)}>
                <Close />
              </PrimaryBtn>
            )}
          </div>
        ))}
        <div
          onClick={() => {
            if (slider_image.length === 3) {
              return setPopupPremium(true);
            } else {
              inputRef.current?.click();
            }
          }}
          className="p-10 cursor-pointer flex flex-col justify-center items-center bg-gray-200 bg-center bg-cover rounded border-2 border-dashed  "
        >
          {imageIsLoading ? <CircularProgress /> : "add image"}
        </div>
        <input
          id="file-upload"
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
      </div>
    </div>
  );
};
