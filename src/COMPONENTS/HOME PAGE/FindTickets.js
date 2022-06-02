import "./FindTickets.css";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FindTickets = () => {
  const [travelFrom, setTravelFrom] = useState("Chandpur");
  const [dropDown, setDropDown] = useState(false);

  return (
    <div>
      <div
        className="w-[70vw] mx-auto absolute left-0 right-0 bottom-0 z-40 px-[3rem] py-[1rem]"
        style={{ background: "rgba(24, 55, 122, 0.8)" }}
      >
        <h1 className="text-[1.7rem] text-white py-[1rem]">Book Bus Ticket</h1>
        <div onBlur={() => setTimeout(() => setDropDown(false), 150)}>
          <div>
          <label htmlFor="travelling-from" className="text-[1.2rem] text-white">Travelling From</label>
            <div>
              <button
                onClick={() => setDropDown(true) }
                className="w-[240px] text-xl text-primary font-bold text-left px-[1rem] py-[.5rem] border bg-dimGray flex items-center justify-between"
              >
                {travelFrom} <IoIosArrowDown />
              </button>
              {
                dropDown && <div className="absolute top-30">
                <button
                  onClick={() => setTravelFrom("Chandpur")}
                  className="w-[240px] text-xl text-primary hover:bg-primary hover:text-white font-bold text-left px-[1rem] py-[.5rem] border bg-dimGray flex items-center justify-between"
                >
                  Chandpur
                </button>
                <button
                  onClick={() => setTravelFrom("Haziganj")}
                  className="w-[240px] text-xl text-primary hover:bg-primary hover:text-white font-bold text-left px-[1rem] py-[.5rem] border bg-dimGray flex items-center justify-between"
                >
                  Haziganj
                </button>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTickets;
