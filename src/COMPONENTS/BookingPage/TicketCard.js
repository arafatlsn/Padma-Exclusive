import React, { useEffect, useState } from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { HiFlag } from "react-icons/hi";
import { BiBus } from "react-icons/bi";
import { useRecoilState } from "recoil";
import {
  goingtoLocationState,
  seatModalState,
  selectDateState,
  startLocationState,
  stepState,
  ticketState,
} from "../../Atom/booking.atom";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import axios from "axios";

const TicketCard = ({ data }) => {
  const [startLocation] = useRecoilState(startLocationState);
  const [gointoLocation] = useRecoilState(goingtoLocationState);
  const [renderData, setRenderData] = useState(data);
  const [ticket, setTicket] = useRecoilState(ticketState);
  const [stepValue, setStepValue] = useRecoilState(stepState);
  const [seatModal, setSeatModal] = useRecoilState(seatModalState);
  const [selectedDate] = useRecoilState(selectDateState);
  const [refetchValue, setRefetchValue] = useState(0);

  useEffect(() => {
    const asyncFunc = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/v1/bookings/get-bookings?sDate=${selectedDate.toDateString()}&bId=${
          data?.busId
        }`
      );
      if (res?.data?.length) {
        res?.data?.forEach((el) => {
          const bookingSeats = el?.seats;
          const filteredDataSeats = renderData?.seats?.filter(
            (el) => bookingSeats?.indexOf(el) === -1
          );
          const newRenderData = renderData;
          newRenderData["seats"] = filteredDataSeats;
          setRenderData(newRenderData);
          setRefetchValue(refetchValue + 1);
        });
      }
    };
    asyncFunc();
  }, [refetchValue]);

  return (
    <div
      onClick={() => {
        setTicket(data);
        setStepValue(1);
        setSeatModal(true);
      }}
      className="w-[100%] bg-white p-[.35rem] rounded-[7px] cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
    >
      <div className="w-fit md:w-[100%] bg-[#e8ebef] p-[1rem] rounded-[7px]">
        <img
          className="w-[150px] md:w-[100%] xl:w-[100%]  h-[70px] md:h-[130px] xl:h-[100px] object-contain"
          src={data?.busImg}
          alt="bus-img"
        />
      </div>
      <div className="py-[1rem] px-[.2rem] md:px-[.5rem]">
        <div className="flex flex-col gap-[.5rem]">
          <div className="flex gap-[4px]">
            <HiFlag className="text-[1.2rem] text-red-600" />
            <div>
              <p className="h-[3ex] text-gray-500 font-[400] text-[13px]">
                {"From - To"}
              </p>
              <p className="text-[12px] lg:text-[1rem] font-[500] turncate">{`${startLocation} - ${gointoLocation}`}</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex gap-[4px]">
              <AiOutlineFieldTime className="text-[1.2rem] text-red-600" />
              <div>
                <p className="h-[3ex] text-gray-500 font-[400] text-[13px]">
                  {"Time"}
                </p>
                <p className="text-[12px] lg:text-[1rem] font-[500] turncate">{`${
                  data?.destinations?.length &&
                  data?.destinations[0]?.journeyStart
                }`}</p>
              </div>
            </div>
            <div className="flex gap-[4px]">
              <BiBus className="text-[1.2rem] text-red-600" />
              <div>
                <p className="h-[3ex] text-gray-500 font-[400] text-[13px]">
                  {"Bus ID"}
                </p>
                <p className="text-[12px] lg:text-[1rem] font-[500] turncate">{`${data?.busId}`}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex gap-[4px]">
              <MdAirlineSeatReclineExtra className="text-[1.2rem] text-red-600" />
              <div>
                <p className="h-[3ex] text-gray-500 font-[400] text-[13px]">
                  {"Available"}
                </p>
                <p className="text-[12px] lg:text-[1rem] font-[500] turncate">{`${renderData?.seats?.length}`}</p>
              </div>
            </div>
            <div className="flex gap-[4px]">
              <TbCurrencyTaka className="text-[1.2rem] text-red-600" />
              <div>
                <p className="h-[3ex] text-gray-500 font-[400] text-[13px]">
                  {"Cost"}
                </p>
                <p className="text-[12px] lg:text-[1rem] font-[500] turncate">{`${
                  data?.destinations?.length && data?.destinations[0]?.cost
                }`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
