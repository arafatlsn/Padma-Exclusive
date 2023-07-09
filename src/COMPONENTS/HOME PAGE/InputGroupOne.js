import React, { useState } from "react";
import { BiCalendar } from "react-icons/bi";
import SelectDateModal from "./SelectDateModal";
import { useRecoilState } from "recoil";
import {
  returnDateState,
  selectDateState,
  ticketTypeState,
} from "../../Atom/booking.atom";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { MdKeyboardArrowDown } from "react-icons/md";
import ReturnDateModal from "./ReturnDateModal";
import { BsArrowCounterclockwise } from "react-icons/bs";
import SnackBarComp from "./SnackBarComp";

const InputGroupOne = () => {
  const [selectedDate] = useRecoilState(selectDateState);
  const [returnDate] = useRecoilState(returnDateState);
  const [ticketType, setTicketType] = useRecoilState(ticketTypeState);
  const [showSelectModal, setShowSelectModal] = useState(false);
  const [showReturnModal, setShowReturnModal] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);

  const handleChange = (e) => {
    setTicketType(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-[1.5rem] md:gap-[2.5rem] bg-white md:w-fit py-[1.5rem] px-[20px] md:px-[3rem]">
      {/* ////// ticket type ///// */}
      <div className="w-[100px] md:w-[140px] flex flex-col gap-[.5rem]">
        <label className="text-[14px] text-gray-500" htmlFor="ticketType">
          Ticket Type
        </label>
        <div>
          <FormControl size="small">
            <Select
              displayEmpty
              value={ticketType}
              onChange={handleChange}
              IconComponent={MdKeyboardArrowDown}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <p className="font-[500] text-gray-600">One Way</p>;
                }
                return <p className="font-[500] text-gray-600">{ticketType}</p>;
              }}
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                width: "100px",
                padding: 0,
                color: "black",
                ".MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                ".css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                  {
                    padding: 0,
                    margin: 0,
                  },
              }}
            >
              <MenuItem value={"One Way"}>
                <p className="text-[14px] text-gray-600">One Way</p>
              </MenuItem>
              <MenuItem onClick={() => setShowSnackBar(true)} value={"One Way"}>
                <p className="text-[14px] text-gray-400">Round</p>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="w-[100%] flex items-center justify-between md:gap-[2.5rem]">
        {/* ///// select date ///// */}
        <div
          onClick={() => setShowSelectModal(true)}
          className="w-[100px] flex flex-col items-center gap-[4px] cursor-pointer"
        >
          <BiCalendar className="text-[1.5rem] text-gray-400" />
          <h4 className="text-[1rem] font-[500] text-red-500">
            {`${
              selectedDate?.toDateString()?.split(" ")[1] +
              " " +
              selectedDate?.toDateString()?.split(" ")[2]
            }`}
          </h4>
          <p className="text-[14px] text-gray-400">Select Date</p>
        </div>
        <BsArrowCounterclockwise className="text-[1.5rem] text-gray-500" />
        {/* ///// select date ///// */}
        <div
          onClick={() => ticketType === "Round" && setShowReturnModal(true)}
          className={`w-[100px] flex flex-col items-center gap-[4px] ${
            ticketType === "Round" && "cursor-pointer"
          }`}
        >
          <BiCalendar className="text-[1.5rem] text-gray-400" />
          <h4
            className={`text-[1rem] font-[500] ${
              ticketType === "Round" ? "text-red-500" : "text-gray-400"
            }`}
          >
            {ticketType === "Round" && returnDate
              ? `${
                  returnDate?.toDateString()?.split(" ")[1] +
                  " " +
                  returnDate?.toDateString()?.split(" ")[2]
                }`
              : "---"}
          </h4>
          <p className="text-[14px] text-gray-400">Return Date</p>
        </div>
      </div>

      {/* ////// Select Date Dialogue /////// */}
      <SelectDateModal
        showSelectModal={showSelectModal}
        setShowSelectModal={setShowSelectModal}
      />
      <ReturnDateModal
        showReturnModal={showReturnModal}
        setShowReturnModal={setShowReturnModal}
      />
      <SnackBarComp
        showSnackBar={showSnackBar}
        setShowSnackBar={setShowSnackBar}
        message={"Round Ticket Not Available"}
      />
    </div>
  );
};

export default InputGroupOne;
