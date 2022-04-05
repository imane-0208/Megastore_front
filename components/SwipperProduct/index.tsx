import React, { useRef, useState, FC, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
type Props = {
  images: string[];
};

export const SwipperProduct: FC<Props> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    if (thumbsSwiper) {
      console.log(thumbsSwiper);
    }
  }, [thumbsSwiper]);

  return (
    <>
      <Swiper
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-ful h-full"
      >
        {images?.map((image, index) => (
          <SwiperSlide
            key={index}
            className="bg-red-600 object-cover object-center"
          >
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
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-4"
      >
        {images?.map((image, index) => (
          <SwiperSlide
            className="object-cover object-center max-h-24"
            key={index}
          >
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
