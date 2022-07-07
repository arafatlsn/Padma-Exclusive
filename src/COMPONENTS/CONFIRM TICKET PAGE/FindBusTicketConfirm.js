import axios from "axios";
import { ToggleSwitch } from "flowbite-react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import TravellingFrom from "../HOME PAGE/TravellingFrom";
import DepartDate from "../HOME PAGE/DepartDate";
import TicketType from "../HOME PAGE/TicketType";
import SelectPassengersComp from "./SelectPassengersComp";
import { TicketInfo } from "../../App";

const FindBusTicketConfirm = ({
  travelFrom,
  setTravelFrom,
  refetch,
  reFetch,
  setReFetch,
}) => {
  const navigate = useNavigate();

  const {
    selectPassengers,
    setSelectPassengers,
    departDate,
    setDepartDate,
    setTravellingTo,
  } = useContext(TicketInfo);

  const today = new Date().toString();
  const dateArr = today.split(" ").slice(0, 4);
  const todayString = `${dateArr[0]} ${dateArr[1]} ${dateArr[2]} ${dateArr[3]}`;
  const [selectTicketType, setSelectTicketType] = useState("One Way");

  const [dropDown, setDropDown] = useState(false);
  const [dropDownThree, setDropDownThree] = useState(false);
  const [dropDownFour, setDropDownFour] = useState(false);
  const [dropDownFive, setDropDownFive] = useState(false);

  const [toggleStatus, setToggleStatus] = useState(false);

  return (
    <div>
      <div className="w-[70vw] mx-auto mt-[3.5rem] px-[3rem] py-[2rem] bg-primary">
        <div className="flex items-center">
          <h1 className="text-[1.7rem] py-[1rem] text-white">
            Book Bus Ticket
          </h1>
          <div className="ml-[1rem] flex">
            <ToggleSwitch
              color="green"
              onClick={() => {
                setToggleStatus(!toggleStatus);
                if (toggleStatus) {
                  setTravelFrom("Chandpur");
                  setTravellingTo("Dhaka");
                } else {
                  setTravelFrom("Dhaka");
                  setTravellingTo("Chandpur");
                }
              }}
              checked={toggleStatus}
            />
            <p className="text-secondary w-[120px]">
              {!toggleStatus ? "From Chandpur" : "From Dhaka"}
            </p>
          </div>
          <button
            onClick={() => {
              setReFetch(!reFetch);
              refetch();
            }}
            className="bg-secondary text-primary px-[1.5rem] py-[.3rem] text-[1.3rem] ml-[3rem] rounded-[.2rem] font-semibold"
          >
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
                  className="w-[240px] text-xl text-primary font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between"
                  disabled
                >
                  Dhaka
                </button>
              ) : (
                <button className="w-[240px] text-xl text-primary hover:bg-primary hover:text-white font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between">
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
          {/* passegners tickets  */}
          <div
            className="mt-[1rem]"
            onBlur={() => setTimeout(() => setDropDownFive(false), 150)}
          >
            <label htmlFor="travelling-to" className="text-[1.2rem] text-white">
              Passengers
            </label>
            <div>
              <button
                onClick={() => setDropDownFive(true)}
                className="w-[240px] text-xl text-primary font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between"
              >
                {selectPassengers} <IoIosArrowDown />
              </button>
              {dropDownFive && (
                <SelectPassengersComp
                  setSelectPassengers={setSelectPassengers}
                />
              )}
            </div>
          </div>
          {/* generate coupon  */}
          <div className="mt-[1rem]">
            <label htmlFor="travelling-to" className="text-[1.2rem] text-white">
              Promo Code
            </label>
            <div>
              <input
                type={"text"}
                className="w-[240px] text-xl text-primary font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between"
                placeholder="Generate Code"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindBusTicketConfirm;
