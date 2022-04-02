import { Skeleton, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import BackupIcon from "@mui/icons-material/Backup";
import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { FooterStore } from "@/components/FooterStore";
import { BrandStore } from "@/components/BrandStore";
import { AllProductsStore } from "@/components/AllProductsStore";
import { BestProductsStore } from "@/components/BestProductsStore";
import { SliderStore } from "@/components/SliderStore";
import { PopupStore } from "@/components/PopupStore";
import StyleIcon from "@mui/icons-material/Style";
import Close from "@mui/icons-material/Close";
import { HeaderStore } from "@/components/HeaderStore";
import { PremiumPopupStore } from "@/components/PremiumPopupStore";
import SaveIcon from "@mui/icons-material/Save";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
  GetStoreByIdDocument,
  useUpdateOptionsMutation,
} from "@/graphql/generated/graphql";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { PopupLoading } from "@/components/PopupLoading";
import { motion } from "framer-motion";
import { PrimaryBtn } from "@/components/PrimaryBtn";
import Link from "next/link";
import DoneIcon from "@mui/icons-material/Done";

const Store = () => {
  const [slider, setSlider] = useState(false);
  const [bestProducts, setBestProducts] = useState(false);
  const [brands, setBrands] = useState(false);
  const [fab, setFab] = useState(true);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [color, setColor] = useState("#0000ff");
  const [popup, setPopup] = useState(false);
  const [options, setOptions] = useState(false);
  const [popupOption, setPopupOption] = useState(true);
  const [popupPremium, setPopupPremium] = useState(false);
  const [imageSrc, setImageSrc] = useState("https://i.imgur.com/jAXaawT.jpg");
  const [popupLoading, setPopupLoading] = useState(false);
  const [saveChanges, setSaveChanges] = useState(false);

  const [updateOptions, { loading: updateLoading }] =
    useUpdateOptionsMutation();

  const { query, isReady } = useRouter();

  const storeId: any = query.slug || [];

  const { data, loading, error } = useQuery(GetStoreByIdDocument, {
    variables: {
      getStoreByIdId: storeId[0],
    },
  });

  const store = data?.getStoreById;
  
  
  
  useEffect(() => {
    setSaveChanges(true);
  }, [slider , bestProducts, brands, bgColor, color, imageSrc]);
  
  useEffect(() => {
    setSaveChanges(false);
  }, []);


  const handleUpdateOptions = async () => {
    setPopupLoading(true);
    const { data: updatedData } = await updateOptions({
      variables: {
        updateStoreOptionsId: store?.options.id,
        input: {
          slider: slider,
          bgColor: bgColor,
          primaryColor: color,
          whatsapp: fab,
          ourBrands: brands,
          bestProducts: bestProducts,
          slider_image: [""],
          storeId: store?.id,
        },
      },
    });
    console.log(updatedData);
    setPopupLoading(false);
    setSaveChanges(false);
  };

  useEffect(() => {
    if (store?.options.bgColor) {
      setBgColor(store?.options.bgColor);
    }
    if (store?.options.primaryColor) {
      setColor(store?.options.primaryColor);
    }

    if (store?.options.slider) {
      setSlider(store?.options.slider);
    }

    if (store?.options.bestProducts) {
      setBestProducts(store?.options.bestProducts);
    }

    if (store?.options.ourBrands) {
      setBrands(store?.options.ourBrands);
    }
  }, [store]);

  //ctrl + s to save changes
  const handleSaveChangesKeyboard = (e: any) => {
    e.preventDefault();
    if (e.ctrlKey && e.keyCode === 83) {
      handleUpdateOptions();
    }
  };



  return (
    <div
      onKeyDown={handleSaveChangesKeyboard}
      style={{
        backgroundColor: bgColor,
      }}
      className={`flex flex-col items-center w-full `}
    >
      <div className="fixed flex flex-col top-2 right-2">
        <div className="flex justify-end gap-2 w-full">
          <PrimaryBtn
            onClick={() => {
              handleUpdateOptions();
            }}
          >
            <span>Save</span>
            &nbsp;
            {saveChanges ? 
            <SaveIcon />
            : <DoneIcon />}
          </PrimaryBtn>
          <Link href={`/store/${storeId[0]}`} passHref>
            <PrimaryBtn className="hover:bg-red-200">
              <span>View</span>
              &nbsp;
              <RemoveRedEyeIcon />
            </PrimaryBtn>
          </Link>
          <div
            onClick={() => setOptions(!options)}
            className="rounded-full p-2 cursor-pointer bg-gray-100 hover:bg-blue-200 w-fit h-fit"
          >
            {options ? <Close /> : <StyleIcon />}
          </div>
        </div>
        {options && (
          <>
            <span
              className="p-3 cursor-pointer mt-2 rounded-full mb-2 shadow-lg border-2 border-white border-solid"
              onClick={() => setPopup(!popup)}
            >
              Popup
            </span>
            <label
              htmlFor="bgColor"
              className="p-3 cursor-pointer rounded-full shadow-lg border-2 border-white border-solid"
              style={{
                backgroundColor: bgColor,
              }}
            >
              color
            </label>
            <input
              type="color"
              id="bgColor"
              className="rounded-full -mt-5 opacity-0"
              onChange={(e) => setBgColor(e.target.value)}
              value={bgColor}
            />
            <label
              htmlFor="color"
              className="p-3 cursor-pointer rounded-full shadow-lg border-2 border-white border-solid"
              style={{
                backgroundColor: color,
              }}
            >
              primary color
            </label>
            <input
              type="color"
              id="color"
              className="rounded-full opacity-0"
              onChange={(e) => setColor(e.target.value)}
              value={color}
            />
          </>
        )}
      </div>
      <h1 className="text-4xl my-8">
        Personalise Your store {store?.userId?.lastName}
      </h1>
      <HeaderStore store={store} />
      <SliderStore setSlider={setSlider} slider={slider} />
      <BestProductsStore
        setBestProducts={setBestProducts}
        bestProducts={bestProducts}
      />
      <AllProductsStore />
      {popupLoading && <PopupLoading setPopupLoading={setPopupLoading} />}
      <BrandStore setBrands={setBrands} brands={brands} />
      <FooterStore />
      {popupPremium && <PremiumPopupStore setPopupPremium={setPopupPremium} />}
      {popup && (
        <PopupStore
          color={color}
          setPopup={setPopup}
          popupOption={popupOption}
          setPopupOption={setPopupOption}
          setImageSrc={setImageSrc}
          imageSrc={imageSrc}
        />
      )}
      <Fab
        className={`fixed print:hidden bottom-0 right-0 mb-4 mr-4 bg-[green] ${
          fab ? "opacity-20" : ""
        }`}
        aria-label="add"
        color="primary"
        sx={{
          "&:hover": {
            backgroundColor: "lightgreen",
          },
          color: "white",
        }}
      >
        <div className="absolute -top-8 ">
          <Switch
            onChange={() => {
              setFab(!fab);
              if (fab) {
                setPopupPremium(true);
              }
              setTimeout(() => {
                setFab(true);
              }, 1000);
            }}
            name="checked"
            inputProps={{ "aria-label": "secondary checkbox" }}
            checked={!fab}
          />
        </div>
        <WhatsAppIcon />
      </Fab>
    </div>
  );
};

export default Store;
