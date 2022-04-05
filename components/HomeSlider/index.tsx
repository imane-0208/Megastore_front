import React, { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

type Props = {
  images: string[];
};

const HomeSlider: FC<Props> = ({ images }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        modules={[ Autoplay ]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper w-full h-full"
      >
        {images?.map((image, index) => {
          return (
            <SwiperSlide className="object-cover object-center" key={index}>
              <img
                className="w-full"
                src={
                  image.length > 0
                    ? image
                    : "https://firebasestorage.googleapis.com/v0/b/megastore-58b93.appspot.com/o/files%2Fabout-us-best-products.png?alt=media&token=d868cccc-b9a8-488d-99d5-94316b7e2386"
                }
                alt="slider"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default HomeSlider;