import React, { useContext } from "react";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { TicketInfo } from "../../App";
import './DestinationCard.css'

const DestinationCard = ({ el }) => {
  const { from, to, cost, time, img } = el;
  const { setTravelFrom, setTravellingTo } = useContext(TicketInfo);

  const navigate = useNavigate();

  return (
    <div className="shadow-2xl">
      <div className="card-container h-[280px] flex justify-center relative">
        <img className="card-img h-[280px] object-cover" src={img} alt="" />
        <p className="absolute font-semibold left-0 bottom-5 bg-secondary text-primary px-[1rem] py-[.3rem]">
          BDT {cost}/pers
        </p>
      </div>
      <div className="p-[.8rem]">
        <p className="flex items-center text-[1.3rem] font-bold text-primary">
          {from} <FaLongArrowAltRight className="mx-[.5rem]" /> {to}
        </p>
        <p className="text-deepGray font-semibold text-[1.1rem]">{time}</p>
        <div className="flex justify-center items-center">
          <button
            onClick={() => {
              setTravelFrom(from)
               setTravellingTo(to)
              navigate(`/destinations`);
            }}
            className="flex justify-center w-[100%] py-[.4rem] text-[1.1rem] border bg-primary text-white font-semibold"
          >
            <MdAirlineSeatReclineExtra className="text-[1.5rem] mx-[.2rem]" />
            Find Seat
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
