import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
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
            <div className="w-full px-4">
              <ul className="flex flex-wrap mb-8 items-center">
                <li className="mr-5">
                  <a
                    className="inline-block mr-5 text-xs font-bold font-heading uppercase text-gray-300"
                    href="#"
                  >
                    HOME
                  </a>
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
                  <a
                    className="inline-block mr-5 text-xs font-bold font-heading uppercase text-gray-300"
                    href="#"
                  >
                    WATER FILTERS
                  </a>
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
                    className="inline-block text-xs font-bold font-heading uppercase text-gray-300"
                    href="#"
                  >
                    {data?.getProductById?.name}
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="flex flex-wrap -mx-1">
                <div className="md:w-full lg:w-1/4 px-1 mb-2 lg:mb-0">
                  <div className="flex lg:flex-col lg:h-full justify-between">
                    <a
                      className="block md:w-32 h-32 border border-blue-300"
                      href="#"
                    >
                      <img
                        className="w-full h-full p-1 lg:p-0 mr-2 lg:mr-0 object-cover"
                        src="yofte-assets/images/product-bottle.png"
                        alt=""
                      />
                    </a>
                    <a
                      className="block md:w-32 h-32 border border-transparent hover:border-gray-400"
                      href="#"
                    >
                      <img
                        className="w-full h-full p-1 lg:p-0 mr-2 lg:mr-0 object-cover"
                        src="yofte-assets/images/product-bottle2.png"
                        alt=""
                      />
                    </a>
                    <a
                      className="block md:w-32 h-32 border border-transparent hover:border-gray-400"
                      href="#"
                    >
                      <img
                        className="w-full h-full p-1 lg:p-0 mr-2 lg:mr-0 object-cover"
                        src="yofte-assets/images/product-bottle3.png"
                        alt=""
                      />
                    </a>
                    <a
                      className="block md:w-32 h-32 border border-transparent hover:border-gray-400"
                      href="#"
                    >
                      <img
                        className="w-full h-full p-1 lg:p-0 mr-2 lg:mr-0 object-cover"
                        src="yofte-assets/images/product-bottle4.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="md:w-full lg:w-3/4 px-1">
                  <div className="relative h-[564px]">
                    <a
                      className="absolute top-1/2 left-0 ml-8 transform translate-1/2"
                      href="#"
                    >
                      <svg
                        width="10"
                        height="18"
                        viewBox="0 0 10 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 16.0185C9.268 16.2905 9.268 16.7275 9 16.9975C8.732 17.2675 8.299 17.2685 8.031 16.9975L0.201 9.0895C-0.067 8.8195 -0.067 8.3825 0.201 8.1105L8.031 0.2025C8.299 -0.0675 8.732 -0.0675 9 0.2025C9.268 0.4735 9.268 0.9115 9 1.1815L1.859 8.6005L9 16.0185Z"
                          fill="#1F40FF"
                        ></path>
                      </svg>
                    </a>
                    <img
                      className="object-cover w-full h-full"
                      src="yofte-assets/images/product-bottle.png"
                      alt=""
                    />
                    <a
                      className="absolute top-1/2 right-0 mr-8 transform translate-1/2"
                      href="#"
                    >
                      <svg
                        width="10"
                        height="18"
                        viewBox="0 0 10 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.19922 1.1817C-0.0687795 0.909696 -0.0687794 0.472695 0.19922 0.202695C0.46722 -0.0673054 0.90022 -0.0683048 1.16822 0.202695L8.99822 8.11069C9.26622 8.3807 9.26622 8.81769 8.99822 9.08969L1.16822 16.9977C0.900219 17.2677 0.467218 17.2677 0.199219 16.9977C-0.0687809 16.7267 -0.0687808 16.2887 0.199219 16.0187L7.34022 8.5997L0.19922 1.1817Z"
                          fill="#1F40FF"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="w-full lg:w-3/4 mt-12 ml-auto">
                  <div className="flex items-center">
                    <span className="mr-8 text-gray-500 font-bold font-heading uppercase">
                      SHARE IT
                    </span>
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
      </div>
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
