import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./CarouselComp.css";

const CarouselComp = () => {
  let day = new Date("2015-03-30");

  let nextDay = new Date(day);
  nextDay.setDate(day.getDate() + 1);
  let thirdDay = new Date(day);
  thirdDay.setDate(day.getDate() + 2);
  let fourthDay = new Date(day);
  fourthDay.setDate(day.getDate() + 3);
  let fifthDay = new Date (day);
  fifthDay.setDate(day.getDate() + 4);

  console.log(day, nextDay, thirdDay, fourthDay, fifthDay)


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
            <div className="top-[50%] w-[70%] mx-auto pt-[12%]">
              <h1 className="text-[4rem] text-white font-[600]">
                Comfort & Style <br /> Over Every Mile
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
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselComp;
