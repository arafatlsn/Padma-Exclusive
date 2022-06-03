import React from "react";
import CarouselComp from "./CarouselComp";
import FindTickets from "./FindTickets";
import OurAdvantage from "./OurAdvantage";

const HomePage = () => {
  return (
    <div>
      <div className="h-[100vh] mx-auto">
        <CarouselComp></CarouselComp>
      </div>
      <div>
        <FindTickets></FindTickets>
      </div>
      <OurAdvantage></OurAdvantage>
    </div>
  );
};

export default HomePage;
