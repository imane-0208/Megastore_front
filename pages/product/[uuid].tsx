import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { motion } from "framer-motion";
// import { GetAllProductsDocument, GetAllProductsQueryVariables } from '@/graphql/generated/graphql';
import {
  GetProductByUuidDocument,
  Product,
} from "@/graphql/generated/graphql";
import { ProductComp } from "@/components/Product";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {
  FreeMode,
  Navigation,
  Thumbs,
  EffectCoverflow,
  Pagination,
} from "swiper";
import Image from "next/image";
import { ProductSmall } from "@/components/ProductSmall";
import { ProductWithStar } from "@/components/ProductWithStar";
import { SwipperProduct } from "@/components/SwipperProduct";
import Header from "@/components/Header";
import { Accordion, AccordionSummary, Skeleton } from "@mui/material";
import { log } from "console";

type Props = {};

const Product: NextPage<Props> = () => {
  const { query, isReady } = useRouter();

  const productId: any = query.uuid;

  const { data, loading, error } = useQuery(GetProductByUuidDocument, {
    variables: {
      uuid: productId,
    },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [addToCart, setAddToCart] = useState(false);

  return (
    <div className="pt-10" >
      <Header
        setLoginPopup={() => {}}
        setAddToCart={setAddToCart}
        addToCart={addToCart}
        imageProductAdded={data?.getProductByUuid?.image[0]}
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="flex flex-wrap -mx-1">
                <div className="md:w-full lg:w-1/4 px-1 mb-2 lg:mb-0"></div>
                <div className="md:w-full lg:w-3/4 px-1">
                  <div className="relative h-[564px] w-full">
                    <div className="w-full px-4">
                      <ul className="flex flex-wrap mb-8 items-center">
                        <li className="mr-5">
                          <Link href="/" passHref={true}>
                            <span className="inline-block hover:text-blue-600 cursor-pointer mr-5 text-xs font-bold font-heading uppercase text-base">
                              HOME
                            </span>
                          </Link>
                          <span className="inline-block">
                            <svg
                              width="6"
                              height="11"
                              viewBox="0 0 6 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.131073 0.755835C-0.0436907 0.581885 -0.0436907 0.302414 0.131073 0.129744C0.305837 -0.0429273 0.588197 -0.0435662 0.76296 0.129744L5.86893 5.18707C6.04369 5.35975 6.04369 5.63922 5.86893 5.81317L0.762959 10.8705C0.588196 11.0432 0.305836 11.0432 0.131072 10.8705C-0.0436916 10.6972 -0.0436916 10.4171 0.131072 10.2444L4.78774 5.4998L0.131073 0.755835Z"
                                fill="#151515"
                              ></path>
                            </svg>
                          </span>
                        </li>
                        <li className="mr-5">
                          <Link
                            href={`/store/${data?.getProductByUuid?.storeId.id}`}
                          >
                            <span className="inline-block hover:text-blue-600 cursor-pointer mr-5 text-xs font-bold font-heading uppercase text-base">
                              {!data?.getProductByUuid?.storeId.id && (
                                <Skeleton variant="text" width={100} />
                              )}
                              {data?.getProductByUuid?.storeId.name}
                            </span>
                          </Link>
                          <span className="inline-block">
                            <svg
                              width="6"
                              height="11"
                              viewBox="0 0 6 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.131073 0.755835C-0.0436907 0.581885 -0.0436907 0.302414 0.131073 0.129744C0.305837 -0.0429273 0.588197 -0.0435662 0.76296 0.129744L5.86893 5.18707C6.04369 5.35975 6.04369 5.63922 5.86893 5.81317L0.762959 10.8705C0.588196 11.0432 0.305836 11.0432 0.131072 10.8705C-0.0436916 10.6972 -0.0436916 10.4171 0.131072 10.2444L4.78774 5.4998L0.131073 0.755835Z"
                                fill="#151515"
                              ></path>
                            </svg>
                          </span>
                        </li>
                        <li>
                          <span
                            className="inline-block hover:text-blue-600 cursor-pointer mr-5 text-xs font-bold font-heading uppercase text-base"
                          >
                            {!data?.getProductByUuid?.storeId.id && (
                              <Skeleton variant="text" width={100} />
                            )}
                            {data?.getProductByUuid?.name}
                          </span>
                        </li>
                      </ul>
                    </div>
                    {!data && (
                      <Skeleton
                        variant="rectangular"
                        className="w-full "
                        height={500}
                      />
                    )}
                    <SwipperProduct images={data?.getProductByUuid?.image} />
                  </div>
                </div>
                <div className="w-full lg:w-3/4 mt-12 ml-auto">
                  <div className="flex items-center">
                    <a className="mr-1 w-8 h-8" href="#">
                      <img
                        src="yofte-assets/buttons/facebook-circle.svg"
                        alt=""
                      />
                    </a>
                    <a className="mr-1 w-8 h-8" href="#">
                      <img
                        src="yofte-assets/buttons/instagram-circle.svg"
                        alt=""
                      />
                    </a>
                    <a className="w-8 h-8" href="#">
                      <img
                        src="yofte-assets/buttons/twitter-circle.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div>
                <div className=" border-b">
                  <span className="text-gray-500">Product</span>
                  <h2 className="mt-2 mb-6 max-w-xl text-5xl md:text-6xl font-bold font-heading">
                    {!data && (
                      <Skeleton
                        variant="rectangular"
                        className="w-1/2 "
                        height={60}
                      />
                    )}
                    {data?.getProductByUuid?.name}
                  </h2>
                  <div className="mb-8">
                    <button>
                      <img
                        className="h-6"
                        src="yofte-assets/elements/star-gold.svg"
                        alt=""
                      />
                    </button>
                    <button>
                      <img
                        className="h-6"
                        src="yofte-assets/elements/star-gold.svg"
                        alt=""
                      />
                    </button>
                    <button>
                      <img
                        className="h-6"
                        src="yofte-assets/elements/star-gold.svg"
                        alt=""
                      />
                    </button>
                    <button>
                      <img
                        className="h-6"
                        src="yofte-assets/elements/star-gold.svg"
                        alt=""
                      />
                    </button>
                    <button>
                      <img
                        className="h-6"
                        src="yofte-assets/elements/star-gray.svg"
                        alt=""
                      />
                    </button>
                  </div>
                  <p className="inline-block mb-8 text-2xl font-bold font-heading text-blue-300">
                    <span
                    className="flex items-end"
                      style={{
                        color:
                          data?.getProductByUuid?.storeId.options.primaryColor,
                      }}
                    >
                      $ {data?.getProductByUuid.price}
                      {!data && <Skeleton variant="rectangular"
                    height={40} width={40}  />}
                    </span>
                  </p>
                </div>
                <div className="flex mb-12">
                  <div className="mr-6">
                    <span className="block mb-4 font-bold font-heading text-gray-400 uppercase">
                      QTY
                    </span>
                    <div className="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                      <button className="py-2 hover:text-gray-700">
                        <svg
                          width="12"
                          height="2"
                          viewBox="0 0 12 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.35">
                            <rect
                              x="12"
                              width="2"
                              height="12"
                              transform="rotate(90 12 0)"
                              fill="currentColor"
                            ></rect>
                          </g>
                        </svg>
                      </button>
                      <input
                        className="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md"
                        type="number"
                        placeholder="1"
                      />
                      <button className="py-2 hover:text-gray-700">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.35">
                            <rect
                              x="5"
                              width="2"
                              height="12"
                              fill="currentColor"
                            ></rect>
                            <rect
                              x="12"
                              y="5"
                              width="2"
                              height="12"
                              transform="rotate(90 12 5)"
                              fill="currentColor"
                            ></rect>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap mb-14 items-center">
                  <div className="w-full lg:w-1/2">
                    <motion.button
                      style={{
                        backgroundColor:
                          data?.getProductByUuid?.storeId.options.primaryColor,
                      }}
                      onClick={() => setAddToCart(true)}
                      className="block mb-4 lg:mb-0 lg:mr-6  text-center text-white font-bold hover:scale-105 font-heading py-5 px-8 rounded-md uppercase transition duration-200"
                    >
                      Add to cart
                    </motion.button>
                  </div>
                  
                </div>
                <div className="flex items-center justify-between py-6 border-b">
                  <Accordion defaultExpanded className="w-full">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="w-full"
                    >
                      <Typography>Description</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data?.getProductByUuid?.description,
                        }}
                      />
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-16">
        <div className="lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900">
          <h3 className="text-gray-600 text-2xl font-medium">More Products</h3>
          <div className="w-full flex flex-wrap  justify-start">
              {data?.getProductByUuid.storeId?.productIds?.map(
                (product: {
                  id: string;
                  name: string;
                  description: string;
                  price: string;
                  image: string;
                  uuid: string;
                }) => (
                  <ProductComp key={product.id} product={product} />
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
