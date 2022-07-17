import React from "react";
import toast from "react-hot-toast";
import "./SpecialService.css";

const SpecialService = () => {
  return (
    <div className="special-service-container">
      <div className="special-service-extra-div">
        <div className="flex justify-center items-center h-[45vh]">
          <div>
            <h1 className="text-[3.5rem] text-white font-bold ">
              Special Service: Bus Rental with Driver
            </h1>
            <div className="flex justify-center">
              <button onClick={() => toast.error('Service Not Available right now.')} className="text-white font-bold bg-primary px-[35px] py-[9px] text-[20px]  capitalize">
                book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialService;
