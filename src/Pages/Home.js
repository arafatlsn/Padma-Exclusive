import React from "react";
import bgBus from "../Assets/citaro-teaser-facts.jpg";
import BannerTop from "../COMPONENTS/HOME PAGE/BannerTop";
import BookingForm from "../COMPONENTS/HOME PAGE/BookingForm";

const Home = () => {
  return (
    <div className="relative">
      {/* ///// bg image ///// */}
      <img
        className="absolute top-0 h-[120vh] md:h-screen w-[100%] object-[-40rem] lg:object-[0rem] object-cover z-[-100]"
        src={bgBus}
        alt=""
      />

      {/* ///// black filter ///// */}
      <div className="h-[120vh] md:h-screen w-[100%] absolute top-0 z-[-50] bg-[#00000050]"></div>

      <div className="h-[120vh] 2xl:w-[1180px] flex flex-col justify-center mx-auto z-[100] px-[20px]  lg:px-[50px] 2xl:px-0">
        <BannerTop />
        <BookingForm />
      </div>
    </div>
  );
};

export default Home;
