import React from "react";
import ticketImg from "../../Assets/ticket-img.jpg";

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

const TicketComp = ({ data, refValue }) => {
  return (
    <div
      ref={refValue}
      className="w-[500px] h-[250px] px-[1rem] mx-auto relative"
    >
      <img
        src={ticketImg}
        alt="ticket-ima"
        className="absolute top-0 left-0 w-[100%] h-[100%] object-cover "
      />
      <div className="absolute px-[1rem] py-[.5rem] top-0 left-0 w-[100%] h-[100%] bg-[#00000090]">
        <div className="flex flex-col items-end">
          <h1 className="h-[3ex] text-[1.5rem] text-secondary font-bold">
            Padma Exclusive
          </h1>
          <p className="text-[1.1rem] text-white">Bus Service</p>
        </div>
        <div className="grid grid-cols-3 gap-[1rem]">
          <div>
            <p className="text-[13px] text-secondary">Passanger Phone</p>
            <p className="w-[100%] bg-secondary text-blue-800 px-[.5rem] py-[.2rem] font-[500]">
              {data?.phone}
            </p>
          </div>
          <div>
            <p className="text-[13px] text-secondary">Date</p>
            <p className="w-[100%] bg-secondary text-blue-800 px-[.5rem] py-[.2rem] font-[500]">
              {new Date(data?.date).toDateString()}
            </p>
          </div>
          <div>
            <p className="text-[13px] text-secondary">Time</p>
            <p className="w-[100%] bg-secondary text-blue-800 px-[.5rem] py-[.2rem] font-[500]">
              {data?.time}
            </p>
          </div>
          <div>
            <p className="text-[13px] text-secondary">Jouney Start</p>
            <p className="w-[100%] bg-secondary text-blue-800 px-[.5rem] py-[.2rem] font-[500]">
              {data?.from}
            </p>
          </div>
          <div>
            <p className="text-[13px] text-secondary">Going to</p>
            <p className="w-[100%] bg-secondary text-blue-800 px-[.5rem] py-[.2rem] font-[500]">
              {data?.to}
            </p>
          </div>
          <div>
            <p className="text-[13px] text-secondary">Bus ID</p>
            <p className="w-[100%] bg-secondary text-blue-800 px-[.5rem] py-[.2rem] font-[500]">
              {data?.busId}
            </p>
          </div>
        </div>
        <div className="mt-[1rem]">
          <p className="text-white text-[1.3rem] font-mono mt-[.5rem]">
            Seats: <span className="text-secondary">{seats(data?.seats)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketComp;
