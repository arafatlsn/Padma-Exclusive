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
              <div className="lg:w-[70%] mx-auto pt-[55%] lg:pt-[14%] px-[.3rem] lg:px-0">
                <h1 className="text-[2.5rem] lg:text-[4rem] text-white font-[600]">
                  Comfort & Style
                </h1>
                <h1 className="text-[2.5rem] lg:text-[4rem] text-white font-[600] mt-[-15px] lg:mt-[-25px]">
                  Over Every Mile
                </h1>
                <p className="lg:mt-[3.3rem] text-white text-[1.3rem]">
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
