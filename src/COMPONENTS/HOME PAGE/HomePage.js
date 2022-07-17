import React, { useContext, useEffect } from "react";
import { TicketInfo } from "../../App";
import BusesLogo from "./BusesLogo";
import CarouselComp from "./CarouselComp";
import Destinations from "./Destinations";
import FindTickets from "./FindTickets";
import OurAdvantage from "./OurAdvantage";
import SpecialService from "./SpecialService";

const HomePage = () => {
  const { setLocation } = useContext(TicketInfo);
  useEffect(() => {
    setLocation('home')
  }, [])
  return (
    <div>
      <div className="h-[100vh] mx-auto">
        <CarouselComp></CarouselComp>
      </div>
      <div>
        <FindTickets></FindTickets>
      </div>
      <div className="bg-white">
      <OurAdvantage></OurAdvantage>
      </div>
      <Destinations></Destinations>
      <SpecialService></SpecialService>
      <BusesLogo></BusesLogo>
    </div>
  );
};

export default HomePage;
