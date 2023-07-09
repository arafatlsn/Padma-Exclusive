import React from "react";
import { HiOutlineTicket } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const FindTicketButton = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col md:flex-row items-center gap-[1rem] md:w-[484px] bg-white px-[3rem] py-[.5rem] box-content">
      <div className="grow">
        <marquee>Get 10% off your first booking!!</marquee>
      </div>
      <button onClick={() => navigate("/booking")} className="flex items-center gap-[4px] bg-orange-500 text-white h-[42px] px-[2.5rem] rounded-[4px] uppercase">
        <HiOutlineTicket className="text-[1.2rem] translate-y-[-.15rem]" /> find
      </button>
    </div>
  );
};

export default FindTicketButton;
