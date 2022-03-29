import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
// import { GetAllProductsDocument, GetAllProductsQueryVariables } from '@/graphql/generated/graphql';
import {
  GetProductByIdDocument,
  GetProductByIdQueryVariables,
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

export const Product: NextPage = () => {
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
      <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
        <div id="viewerButton" className="hidden w-full flex justify-center">
          <button className="bg-white text-indigo-600 shadow-md rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 py-5 px-10 font-semibold">
            Open Quick View
          </button>
        </div>
        <div
          id="viewerBox"
          className="lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900"
        >
          <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech justify-center lg:space-x-8">
            <div className="lg:w-1/2 flex object-cover justify-between items-strech bg-gray-50  px-2 py-20 md:py-6 md:px-6">
              <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <SwiperSlide className="object-cover object-center">
                  <Image
                    layout="fill"
                    src="https://i.ibb.co/fMGD6ZC/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-3-1.png"
                    alt="A black chair with wooden legs"
                    className=" h-full"
                  />
                </SwiperSlide>
                <SwiperSlide className="object-cover object-center">
                  <Image
                    layout="fill"
                    src="https://i.ibb.co/fMGD6ZC/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-3-1.png"
                    alt="A black chair with wooden legs"
                    className=" h-full"
                  />
                </SwiperSlide>
                <SwiperSlide className="object-cover object-center">
                  <Image
                    layout="fill"
                    src="https://i.ibb.co/fMGD6ZC/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-3-1.png"
                    alt="A black chair with wooden legs"
                    className=" h-full"
                  />
                </SwiperSlide>
                ...
              </Swiper>
            </div>

            <div className="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
                {data?.getProductById.name}
              </h1>
              <p className="text-base leading-normal text-gray-600 dark:text-white mt-2">
                {data?.getProductById.description}
              </p>
              <p className="text-3xl font-medium text-gray-600 dark:text-white mt-8 md:mt-10"></p>
              <div className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16">
                <button className="w-full md:w-3/5 border border-gray-800 text-base font-medium leading-none text-white uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
                  Add to Cart
                </button>
                <button className="w-full md:w-2/5 border border-gray-800 text-base font-medium leading-none text-gray-800 dark:text-white uppercase py-6 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-transparent dark:border-white dark:text-white focus:ring-gray-800 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-800 ">
                  View Details
                </button>
              </div>
              <div className="mt-6">
                <button className="text-xl underline text-gray-800 dark:text-white dark:hover:text-gray-200 capitalize hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                  add to wishlist
                </button>
              </div>
            </div>
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
