import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  goingtoLocationState,
  selectDateState,
  selectedSeatState,
  startLocationState,
  ticketState,
  userPhoneState,
} from "../../Atom/booking.atom";
import { HiFlag, HiOutlineClock, HiOutlineDeviceMobile } from "react-icons/hi";
import { BiCalendarMinus } from "react-icons/bi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import toast from "react-hot-toast";
import { TbCurrencyTaka } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import axios from "axios";

const splitedDate = (d) => {
  const date = d;
  const dateString = date?.toDateString();

  return dateString;
};

const seats = (seatsArr) => {
  let seats;
  for (let i = 0; i < seatsArr?.length; i++) {
    if (seats) {
      seats = seats + ", " + seatsArr[i];
    } else {
      seats = seatsArr[i];
    }
  }
  return seats;
};

const validatePhone = (phone) => {
  return String(phone)
    .toLowerCase()
    .match(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/);
};

const PaymentRight = () => {
  const [startLocation] = useRecoilState(startLocationState);
  const [gointoLocation] = useRecoilState(goingtoLocationState);
  const [selectedDate] = useRecoilState(selectDateState);
  const [ticket] = useRecoilState(ticketState);
  const [selectedSeats] = useRecoilState(selectedSeatState);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [userPhone, setUserPhone] = useRecoilState(userPhoneState);

  const handleBooking = async () => {
    if (userPhone && isValidPhone) {
      const res = await axios.post(
        "http://localhost:5000/api/v1/payment/booking",
        {
          from: startLocation,
          to: gointoLocation,
          date: selectedDate.toDateString(),
          time:
            ticket?.destinations?.length &&
            ticket?.destinations[0]?.journeyStart,
          seats: selectedSeats,
          cost:
            ticket?.destinations?.length &&
            ticket?.destinations[0]?.cost * selectedSeats?.length,
          phone: userPhone,
          busId: ticket?.busId,
        }
      );
      window.location.replace(res?.data);
    } else {
      setIsValidPhone(false);
      toast.error("Please Give a Valid Phone Number");
    }
  };

  return (
    <div className="flex flex-col gap-[1.5rem] w-[100%] md:w-[420px] px-[20px] md:px-0">
      <div className="flex gap-[8px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-[1rem] py-[.5rem]">
        <HiFlag className="text-[2.5rem] text-red-500" />
        <div>
          <p className="h-[3ex] text-[14px] text-gray-500">From - To</p>
          <h6>{`${startLocation} - ${gointoLocation}`}</h6>
        </div>
      </div>
      <div className="flex gap-[8px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-[1rem] py-[.5rem]">
        <BiCalendarMinus className="text-[2.5rem] text-red-500" />
        <div>
          <p className="h-[3ex] text-[14px] text-gray-500">Date</p>
          <h6>{`${splitedDate(selectedDate)}`}</h6>
        </div>
      </div>
      <div className="flex gap-[8px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-[1rem] py-[.5rem]">
        <HiOutlineClock className="text-[2.5rem] text-red-500" />
        <div>
          <p className="h-[3ex] text-[14px] text-gray-500">Journey Start</p>
          <h6>{`${
            ticket?.destinations?.length &&
            ticket?.destinations[0]?.journeyStart
          }`}</h6>
        </div>
      </div>
      <div className="flex gap-[8px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-[1rem] py-[.5rem]">
        <MdAirlineSeatReclineExtra className="text-[2.5rem] text-red-500" />
        <div>
          <p className="h-[3ex] text-[14px] text-gray-500">Your Seats</p>
          <h6>{seats(selectedSeats)}</h6>
        </div>
      </div>
      <div className="flex gap-[8px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-[1rem] py-[.5rem]">
        <HiOutlineDeviceMobile className="text-[2.5rem] text-red-500" />
        <div>
          <p className="text-[14px] text-gray-500">
            Phone <span className="text-red-600">(required)</span>
          </p>
          <input
            onBlur={(e) => {
              const value = e?.target?.value;
              const validPhone = validatePhone(value);
              if (!validPhone) {
                setIsValidPhone(false);
              } else {
                setIsValidPhone(true);
                setUserPhone(value);
              }
            }}
            className={`w-[100%] h-[28px] focus:ring-0 focus:outline-none rounded-[2px] ${
              isValidPhone
                ? "bg-gray-200 border-0"
                : "bg-red-200 border-[1px] border-red-400"
            }`}
            type="text"
          />
        </div>
      </div>
      <div className="mt-[.5rem]">
        <h4 className="flex items-center text-[18px] text-gray-600 font-[500]">
          Total:{" "}
          <span className="flex text-[24px] text-red-600">
            <TbCurrencyTaka />
            {ticket?.destinations?.length &&
              ticket?.destinations[0]?.cost * selectedSeats?.length}
          </span>
        </h4>
      </div>
      <div>
        <button
          onClick={handleBooking}
          className="flex items-center gap-[4px] bg-blue-800 text-white px-[3rem] py-[.5rem] rounded-[4px] uppercase tracking-wider"
        >
          <RiSecurePaymentFill className="text-[1.2rem] translate-y-[-.1rem]" />{" "}
          Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentRight;
