import { ProductComp } from "@/components/Product";
import { TextEditor } from "@/components/TextEditor";
import { GetServerSideProps, NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import InventoryIcon from "@mui/icons-material/Inventory";
import { PrimaryBtn } from "@/components/PrimaryBtn";
import { motion } from "framer-motion";
import { storage } from "../../../firebase/index.js";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { CircularProgress, LinearProgress } from "@mui/material";
import { useRouter } from "next/router";
import {
  Category,
  GetAllCategoriesDocument,
  GetAllCategoriesQuery,
  useCreateProductMutation,
} from "@/graphql/generated/graphql";
import apolloClient from "@/graphql/apollo";

export type Props = {
  categories: Category[];
};

const New: NextPage<Props> = ({ categories }) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("0");
  const [progress, setProgress] = useState(0);
  const [imageAsFile, setImageAsFile] = useState(null);
  const [promoPrice, setPromoPrice] = useState("0");
  const [imageIsLoading, setImageIsLoading] = useState(false);
  const [sliderImages, setSliderImages] = useState<Array<String>>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [primaryImage, setPrimaryImage] = useState(0);
  const [readProgress, setReadProgress] = useState(0);
  const [priceProgress, setPriceProgress] = useState(0);
  const [nameProgress, setNameProgress] = useState(0);
  const [categoryProgress, setCategoryProgress] = useState(0);
  const [category, setCategory] = useState("");
  const [descriptionProgress, setDescriptionProgress] = useState(0);
  const [imagesProgress, setImagesProgress] = useState(0);
  const [stock, setStock] = useState("0");
  const [stockProgress, setStockProgress] = useState(0);
  const [editorState, setEditorState] = useState();

  const {query , 
    isReady
  } = useRouter();

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
            setSliderImages([...sliderImages, url]);
            setTimeout(() => {
              setImageIsLoading(false);
            }, 1200);
          });
        }
      );
    }
  };

  const handleRemoveImage = (index: number) => {
    setSliderImages((sliderImages) => {
      return sliderImages.filter((_, i) => i !== index);
    });
  };

  const handleChange = async (e: any) => {
    // @ts-ignore
    if (e?.target?.files[0]) {
      // @ts-ignore
      const image = e?.target?.files[0];
      setImageAsFile((imageFile) => image);
    }
  };

  useEffect(() => {
    if (imageAsFile) {
      handleFireBaseUpload();
      setImageAsFile(null);
    }
  }, [imageAsFile]);

  useEffect((): void => {
    if (price.length > 1) {
      setPriceProgress(20);
    } else if (price.length === 0) {
      setPriceProgress(0);
    }
    if (productName.length > 10) {
      setNameProgress(20);
    } else if (productName.length === 0) {
      setNameProgress(0);
    }

    if (+stock > 0) {
      setStockProgress(20);
    } else if (+stock === 0) {
      setStockProgress(0);
    }

    if (category.length > 0) {
      setCategoryProgress(20);
    } else if (category.length === 0) {
      setCategoryProgress(0);
    }

    if (sliderImages.length !== 0 && sliderImages.length > 2) {
      setImagesProgress(20);
    } else if (sliderImages.length === 0) {
      setImagesProgress(0);
    } else if (sliderImages.length > 3) {
      setImagesProgress(60);
    }
  }, [price, productName, sliderImages, category, stock]);

  useEffect((): void => {
    setReadProgress(
      priceProgress +
        nameProgress +
        stockProgress +
        imagesProgress +
        categoryProgress
    );
  }, [
    priceProgress,
    nameProgress,
    imagesProgress,
    categoryProgress,
    stockProgress,
  ]);

  useEffect(() => {
    console.log(editorState);
  }, [editorState]);

  const [createProduct, { loading: createProductLoading }] =
    useCreateProductMutation();



  const handleCreateProduct = async () => {

    const storeID = await JSON.parse(localStorage.getItem("user"))?.store?.id;


    const { data: createdProduct } = await createProduct({
      variables: {
        input: {
          name: productName,
          price: price,
          promoPrice: promoPrice,
          description: editorState,
          categoryIds: [category],
          stock: stock,
          //@ts-ignore
          image: sliderImages,
          storeId: storeID,
        },
      },
    });

    console.log(createdProduct);
  };

  return (
    <div className="p-8 relative">
      {createProductLoading && (
        <div className="fixed z-50 top-0 left-0 flex justify-center items-center w-screen bg-white bg-opacity-50 h-screen">
          <CircularProgress size={300} thickness={2} />
        </div>
      )}
      <h1 className="text-2xl font-black">New Product</h1>
      <div className="w-full mt-5 flex gap-6">
        <div className="w-3/4">
          <div className="w-full">
            <label
              htmlFor="nameProduct"
              className="block text-gray-700 text-2xl font-bold mb-3"
            >
              Product Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="nameProduct"
              placeholder="Product Name "
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <label className="block text-gray-700 text-2xl font-bold my-3 mt-5">
            Product Description
          </label>
          <div className="bg-white mt-5 p-3 rounded-sm">
            {/* @ts-ignore */}
            <TextEditor setEditorState={setEditorState} />
          </div>
          <label
            htmlFor="nameProduct"
            className="block text-gray-700 text-2xl font-bold my-3 mt-5"
          >
            Product Price
          </label>
          <div className="bg-white mt-5 p-3 flex justify-between gap-3 rounded-sm">
            <div className="w-1/2">
              <label
                htmlFor="namePrice"
                className="block text-gray-700 text-xl font-bold my-2"
              >
                Initial Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                id="namePrice"
                placeholder="Product Price"
                min={0}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="namePrice"
                className="block text-gray-700 text-xl font-bold my-2"
              >
                Promotion Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                id="namePrice"
                min={0}
                placeholder="Product Price"
                onChange={(e) => setPromoPrice(e.target.value)}
              />
            </div>
          </div>
          <label
            htmlFor="nameProduct"
            className="block text-gray-700 text-2xl font-bold my-3 mt-5"
          >
            Product info
          </label>
          <div className="bg-white mt-5 p-3 flex justify-between gap-3 rounded-sm">
            <div className="w-1/2">
              <label
                htmlFor="namePrice"
                className="block text-gray-700 text-xl font-bold my-2"
              >
                Product category
              </label>
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name=""
                id=""
              >
                {(categories || [])?.map((category, index) => {
                  return (
                    // @ts-ignore
                    <option key={index} value={category?.id}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="w-1/2">
              <label
                htmlFor="namePrice"
                className="block text-gray-700 text-xl font-bold my-2"
              >
                Stock
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="0"
                min={1}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full flex justify-between items-end">
            <label className="block text-gray-700 text-2xl font-bold my-3 mt-5">
              Product Images
            </label>
            <PrimaryBtn
              onClick={() => inputRef.current?.click()}
              className="px-5 bg-green-500 text-white hover:text-white hover:bg-green-900 "
            >
              Add images
            </PrimaryBtn>
            <input
              id="file-upload"
              ref={inputRef}
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
          </div>
          <div className="bg-white relative flex gap-3 mt-5 p-3 rounded-sm">
            {imageIsLoading && (
              <div className="absolute w-full h-full flex top-0 left-0 bg-white bg-opacity-50 justify-center items-center">
                <CircularProgress />
              </div>
            )}
            {sliderImages.map((_, i) => (
              <div
                key={i}
                className="w-44 flex flex-col gap-4 justify-center items-center"
              >
                <div
                  onClick={() => setPrimaryImage(i)}
                  className={`p-16 rounded bg-slate-300 cursor-pointer border-green-600  border-solid ${
                    i === primaryImage ? "border-4" : ""
                  }`}
                  style={{
                    backgroundImage: `url(${_})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="w-full flex justify-center items-center">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => handleRemoveImage(i)}
                  >
                    Delete
                  </motion.button>
                </div>
              </div>
            ))}
            {sliderImages.length === 0 && (
              <div className="text-3xl text-center w-full p-20">Add images</div>
            )}
          </div>
        </div>
        <div className="w-1/4">
          <div className="fixed top-10 right-10">
            <h3 className="text-2xl  font-bold mb-3">Product preview</h3>
            <div className="w-full p-4 bg-white rounded">
              <div className="w-full">
                <div
                  style={{
                    backgroundImage: `url(${sliderImages[primaryImage]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="w-64 h-64 rounded flex justify-center items-center bg-slate-100"
                >
                  {sliderImages.length === 0 && (
                    <InventoryIcon
                      className="text-purple-600"
                      sx={{
                        fontSize: "5rem",
                      }}
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="nameProduct" className="text-xl my-2">
                    {productName}
                  </label>
                  <span>${price}</span>
                </div>
              </div>
            </div>
            <div className="p-3 rounded-md bg-white mt-3">
              <h4 className="mb-5">Readability: {readProgress} %</h4>
              <LinearProgress variant="determinate" value={readProgress} />
            </div>
            <div className="w-full flex justify-end mt-5">
              <PrimaryBtn
                onClick={() => {
                  handleCreateProduct();
                }}
                className="w-24  bg-green-700 text-white hover:text-white hover:bg-green-900 "
              >
                Save
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: CategoryData } = await apolloClient.query({
    query: GetAllCategoriesDocument,
  });

  return {
    props: {
      categories: CategoryData.getAllCategories,
    },
  };
};
