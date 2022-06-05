import React from "react";
import "./ConfirmPageBanner.css";
import { FaLongArrowAltRight } from 'react-icons/fa'

const ConfirmPageBanner = ({ from, to }) => {
  return (
    <div>
      <div className="confirm-page-banner h-[50vh]">
        <div className="confirm-page-parent h-[50vh]">
          <div className="w-[70%] mx-auto h-[50vh] flex items-center">
          <h1 className="text-white text-[3.5rem] font-bold mt-[5%] flex items-center">{from} <FaLongArrowAltRight className="mx-[2rem]"/> {to}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPageBanner;
