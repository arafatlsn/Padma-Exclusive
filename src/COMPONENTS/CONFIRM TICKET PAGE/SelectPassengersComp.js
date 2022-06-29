import React from 'react';

const SelectPassengersComp = ({ setSelectPassengers }) => {
  return (
    <div className="absolute top-30 z-[100]">
      <button
        onClick={() => setSelectPassengers(1)}
        className="w-[240px] text-xl text-primary hover:bg-primary hover:text-white font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between"
      >
        1
      </button>
      <button
        onClick={() => setSelectPassengers(2)}
        className="w-[240px] text-xl text-primary hover:bg-primary hover:text-white font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between"
      >
        2
      </button>
      <button
        onClick={() => setSelectPassengers(3)}
        className="w-[240px] text-xl text-primary hover:bg-primary hover:text-white font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between"
      >
        3
      </button>
    </div>
  );
};

export default SelectPassengersComp;