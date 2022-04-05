import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Link from "next/link";
// import { GetAllProductsDocument, GetAllProductsQueryVariables } from '@/graphql/generated/graphql';
import {
  GetProductByIdDocument,
  GetProductByIdQueryVariables,
  Product
} from "@/graphql/generated/graphql";
import { ProductComp } from "@/components/Product";

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

type Props = {}

const Product: NextPage<Props> = () => {
  const { query, isReady } = useRouter();

  const productId: any = query.slug || [];

  const { data, loading, error } = useQuery(GetProductByIdDocument, {
    variables: {
      getProductByIdId: productId[0],
    },
  });

  useEffect(() => {
    console.log(productId[0]);
    console.log(data);
  });

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="flex flex-wrap -mx-1">
                <div className="md:w-full lg:w-1/4 px-1 mb-2 lg:mb-0">
                  
                </div>
                <div className="md:w-full lg:w-3/4 px-1">
                  <div className="relative h-[564px] w-full">
                  <div className="w-full px-4">
              <ul className="flex flex-wrap mb-8 items-center">
                <li className="mr-5">
                  <Link href="/" passHref={true}
                  >
                    <span className="inline-block hover:text-blue-600 cursor-pointer mr-5 text-xs font-bold font-heading uppercase text-base">HOME</span> 
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
                    href={`/store/${data?.getProductById?.storeId.id}`}
                  >
                    <span className="inline-block hover:text-blue-600 cursor-pointer mr-5 text-xs font-bold font-heading uppercase text-base">{data?.getProductById?.storeId.name}</span> 
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
                  <a
                    className="inline-block hover:text-blue-600 cursor-pointer mr-5 text-xs font-bold font-heading uppercase text-base"
                    href="#"
                  >
                    {data?.getProductById?.name}
                  </a>
                </li>
              </ul>
            </div>
                    <SwipperProduct images={["data:image/jpeg;base64,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" , "https://www.courir.com/on/demandware.static/-/Library-Sites-Courir/default/dw3ea2d308/PAGE%20MARQUE/PUMA/top%20collection/PUMA-MIRAGE-TECH-TOPCOLLECTION-700x600px2.jpg" , "https://images.asos-media.com/products/puma-basket-classic-baskets-noir-et-blanc/201225688-4?$n_640w$&wid=513&fit=constrain"]} />
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
                <div className="mb-10 pb-10 border-b">
                  <span className="text-gray-500">Brille</span>
                  <h2 className="mt-2 mb-6 max-w-xl text-5xl md:text-6xl font-bold font-heading">
                    {data?.getProductById?.name}
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
                    <span>$ {data?.getProductById.price}</span>
                    <span className="font-normal text-base text-gray-400 line-through">
                      $33.69
                    </span>
                  </p>
                  <p className="max-w-md text-gray-500">
                    Maecenas commodo libero ut molestie dictum. Morbi placerat
                    eros id porttitor sagittis.
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
                  <div>
                    <span className="block mb-4 font-bold font-heading text-gray-400 uppercase">
                      Size
                    </span>
                    <select
                      className="pl-6 pr-10 py-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                      name=""
                      id=""
                    >
                      <option value="1">Medium</option>
                      <option value="2">Small</option>
                      <option value="3">Large</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap mb-14 items-center">
                  <div className="w-full lg:w-1/2">
                    <a
                      className="block mb-4 lg:mb-0 lg:mr-6 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-5 px-8 rounded-md uppercase transition duration-200"
                      href="#"
                    >
                      Add to cart
                    </a>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <a
                      className="flex-shrink-0 flex w-full flex-wrap items-center justify-center w-16 h-16 rounded-md border hover:border-gray-500"
                      href="#"
                    >
                      <svg
                        className="-mt-1 mr-2"
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="font-bold font-heading uppercase">
                        Add to wishlist
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-between py-6 border-b">
                  <h4 className="text-xl font-bold font-heading">
                    Description
                  </h4>
                  <a
                    className="inline-flex items-center justify-center w-12 h-12 border hover:border-gray-500 rounded-md"
                    href="#"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="5" width="2" height="12" fill="#161616"></rect>
                      <rect
                        x="12"
                        y="5"
                        width="2"
                        height="12"
                        transform="rotate(90 12 5)"
                        fill="#161616"
                      ></rect>
                    </svg>
                  </a>
                </div>
                <div className="flex items-center justify-between py-6 border-b">
                  <h4 className="text-xl font-bold font-heading">
                    Customer reviews
                  </h4>
                  <a
                    className="inline-flex items-center justify-center w-12 h-12 border hover:border-gray-500 rounded-md"
                    href="#"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="5" width="2" height="12" fill="#161616"></rect>
                      <rect
                        x="12"
                        y="5"
                        width="2"
                        height="12"
                        transform="rotate(90 12 5)"
                        fill="#161616"
                      ></rect>
                    </svg>
                  </a>
                </div>
                <div className="flex items-center justify-between py-6 border-b">
                  <h4 className="text-xl font-bold font-heading">
                    Shipping &amp; returns
                  </h4>
                  <a
                    className="inline-flex items-center justify-center w-12 h-12 border hover:border-gray-500 rounded-md"
                    href="#"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="5" width="2" height="12" fill="#161616"></rect>
                      <rect
                        x="12"
                        y="5"
                        width="2"
                        height="12"
                        transform="rotate(90 12 5)"
                        fill="#161616"
                      ></rect>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* <div className="mt-16">
        <div className="lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900">
          <h3 className="text-gray-600 text-2xl font-medium">More Products</h3>
          <div className="w-full">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {data?.getProductById.storeId?.productIds?.map(
                (product: {
                  id: string;
                  name: string;
                  description: string;
                  price: string;
                  image: string;
                }) => (
                  <SwiperSlide
                    key={product.id}
                    className="object-cover object-center max-w-[300px]"
                  >
                    <ProductSmall
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </div>
      </div> */}
      <div className="mt-16">
        <div className="lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900">
          <h3 className="text-gray-600 text-2xl font-medium">More Products</h3>
          <div className="w-full">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {data?.getProductById.storeId?.productIds?.map(
                (product: {
                  id: string;
                  name: string;
                  description: string;
                  price: string;
                  image: string;
                }) => (
                  <SwiperSlide
                    key={product.id}
                    className="object-cover object-center max-w-[300px]"
                  >
                    <ProductWithStar
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
