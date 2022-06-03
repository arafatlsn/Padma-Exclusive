import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./CarouselComp.css";

const CarouselComp = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[100vh] carousel-prnt">
            <div className="carousel-scnd-prnt">
              <div className="w-[70%] mx-auto pt-[14%]">
                <h1 className="text-[4rem] text-white font-[600]">
                  Comfort & Style
                </h1>
                <h1 className="text-[4rem] text-white font-[600] mt-[-25px]">
                  Over Every Mile
                </h1>
                <p className="mt-[3.3rem] text-white text-[1.3rem]">
                  BusExpress is the leading go-to website for booking inter-city
                  bus online.
                </p>
                <button
                  className="px-[35px] py-[9px] text-[18px] font-bold text-white border mt-[2rem]"
                  disabled
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselComp;
