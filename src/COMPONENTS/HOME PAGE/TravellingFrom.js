import React from "react";

const TravellingFrom = ({ setTravelFrom, toggleStatus }) => {

  let arr;
  if(!toggleStatus){
    arr = ['Chandpur', 'Haziganj', 'Comilla']
  }
  else{
    arr = ['Dhaka', 'Kachpur', 'Meghna']
  }

  return (
    <div className="absolute top-30">
      {
        arr.map(el => <button
          onClick={() => setTravelFrom(el)}
          className="w-[240px] text-xl text-primary hover:bg-primary hover:text-white font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between"
        >
          {el}
        </button>)
      }
    </div>
  );
};

export default TravellingFrom;
