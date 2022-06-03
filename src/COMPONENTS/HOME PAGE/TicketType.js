import React from 'react';

const TicketType = ({ setSelectTicketType }) => {
  return (
    <div className="absolute top-30">
      <button
        onClick={() => setSelectTicketType("One Way")}
        className="w-[240px] text-xl text-primary hover:bg-primary hover:text-white font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between"
      >
        One Way
      </button>
      <button
        onClick={() => setSelectTicketType("Round Trip")}
        className="w-[240px] text-xl text-primary hover:bg-primary hover:text-white font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between"
      >
        Round Trip
      </button>
    </div>
  );
};

export default TicketType;