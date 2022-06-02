import React from "react";
import CarouselComp from "./CarouselComp";
import FindTickets from "./FindTickets";

const HomePage = () => {
  return (
    <div>
      <div className="h-[100vh] mx-auto">
        <CarouselComp></CarouselComp>
      </div>
      <div>
        <FindTickets></FindTickets>
      </div>
    </div>
  );
};

export default HomePage;
