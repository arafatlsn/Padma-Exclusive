import "./FindTickets.css";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import TravellingFrom from "./TravellingFrom";
import DepartDate from "./DepartDate";
import TicketType from "./TicketType";
import { ToggleSwitch } from "flowbite-react";

const FindTickets = () => {
  const today = new Date().toString();
  const dateArr = today.split(" ").slice(0, 4);
  const todayString = `${dateArr[0]} ${dateArr[1]} ${dateArr[2]} ${dateArr[3]}`;

  const [travelFrom, setTravelFrom] = useState("Chandpur");
  const [travellingTo, setTravellingTo] = useState("Dhaka");
  const [departDate, setDepartDate] = useState(todayString);
  const [selectTicketType, setSelectTicketType] = useState("One Way");
  const [dropDown, setDropDown] = useState(false);
  const [dropDownThree, setDropDownThree] = useState(false);
  const [dropDownFour, setDropDownFour] = useState(false);
  const [toggleStatus, setToggleStatus] = useState(false);

  return (
    <div>
      <div
        className="w-[70vw] mx-auto absolute left-0 right-0 bottom-0 z-40 px-[3rem] py-[1.2rem]"
        style={{ background: "rgba(24, 55, 122, 0.8)" }}
      >
        <div className="flex items-center">
          <h1 className="text-[1.7rem] py-[1rem] text-white">
            Book Bus Ticket
          </h1>
          <div className="ml-[1rem] flex">
            <ToggleSwitch
              color="green"
              onClick={() => {
                setToggleStatus(!toggleStatus)
                if(toggleStatus){
                  setTravelFrom('Chandpur')
                }
                else{
                  setTravelFrom('Dhaka')
                }
              }}
              checked={toggleStatus}
            />
            <p className="text-secondary w-[120px]">
              {!toggleStatus ? "From Chandpur" : "From Dhaka"}
            </p>
          </div>
          <button className="bg-secondary text-primary px-[1.5rem] py-[.3rem] text-[1.3rem] ml-[3rem] rounded-[.2rem] font-semibold">
            Find Ticket
          </button>
        </div>
        <div className="grid grid-cols-4">
          {/* travelling from  */}
          <div onBlur={() => setTimeout(() => setDropDown(false), 150)}>
            <label
              htmlFor="travelling-from"
              className="text-[1.2rem] text-white"
            >
              Travelling From
            </label>
            <div>
              <button
                onClick={() => setDropDown(true)}
                className="w-[240px] text-xl text-primary font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between"
              >
                {travelFrom} <IoIosArrowDown />
              </button>
              {dropDown && (
                <TravellingFrom
                  toggleStatus={toggleStatus}
                  setTravelFrom={setTravelFrom}
                ></TravellingFrom>
              )}
            </div>
          </div>
          {/* travelling to  */}
          <div>
            <label htmlFor="travelling-to" className="text-[1.2rem] text-white">
              Travelling To
            </label>
            <div>
            {!toggleStatus ? (
                <button
                  onClick={() => setTravellingTo("Dhaka")}
                  className="w-[240px] text-xl text-primary hover:bg-primary hover:text-white font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between"
                >
                  Dhaka
                </button>
              ) : (
                <button
                  onClick={() => setTravellingTo("Chandpur")}
                  className="w-[240px] text-xl text-primary hover:bg-primary hover:text-white font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between"
                >
                  Chandpur
                </button>
              )}
            </div>
          </div>
          {/* depart date  */}
          <div onBlur={() => setTimeout(() => setDropDownThree(false), 150)}>
            <label htmlFor="travelling-to" className="text-[1.2rem] text-white">
              Depart Date
            </label>
            <div>
              <button
                onClick={() => setDropDownThree(true)}
                className="w-[240px] text-xl text-primary font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between"
              >
                {departDate} <IoIosArrowDown />
              </button>
              {dropDownThree && (
                <DepartDate setDepartDate={setDepartDate}></DepartDate>
              )}
            </div>
          </div>
          {/* ticket type  */}
          <div onBlur={() => setTimeout(() => setDropDownFour(false), 150)}>
            <label htmlFor="travelling-to" className="text-[1.2rem] text-white">
              Ticket Type
            </label>
            <div>
              <button
                onClick={() => setDropDownFour(true)}
                className="w-[240px] text-xl text-primary font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between"
              >
                {selectTicketType} <IoIosArrowDown />
              </button>
              {dropDownFour && (
                <TicketType
                  setSelectTicketType={setSelectTicketType}
                ></TicketType>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTickets;
