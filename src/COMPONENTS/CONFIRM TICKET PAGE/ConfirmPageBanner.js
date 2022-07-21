import React, { useContext } from "react";
import "./ConfirmPageBanner.css";
import { FaLongArrowAltRight } from 'react-icons/fa'
import { TicketInfo } from "../../App";

const ConfirmPageBanner = () => {
  const { travelFrom, travellingTo } = useContext(TicketInfo)
  return (
    <div>
      <div className="confirm-page-banner h-[30vh] lg:h-[50vh]">
        <div className="confirm-page-parent h-[30vh] lg:h-[50vh]">
          <div className="lg:w-[70%] mx-auto h-[30vh] lg:h-[50vh] flex items-center">
          <h1 className="text-white text-[2rem] lg:text-[3.5rem] font-bold mt-[5%] flex items-center">{travelFrom} <FaLongArrowAltRight className="mx-[2rem]"/> {travellingTo}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPageBanner;
