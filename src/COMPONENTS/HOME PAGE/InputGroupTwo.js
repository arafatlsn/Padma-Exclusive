import React, { useEffect } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiFlag } from "react-icons/hi";
import { useRecoilState } from "recoil";
import {
  goingtoLocationState,
  startLocationState,
  travellingStartState,
} from "../../Atom/booking.atom";
import { AiOutlineSwap } from "react-icons/ai";
import { HiOutlineTicket } from "react-icons/hi";

const InputGroupTwo = () => {
  // DROPDOWN STATE
  // const [selected, setSeleceted] = useState("");

  const location1 = ["Chandpur", "Haziganj", "Comilla"];
  const location2 = ["Gulistan", "Jatrabari", "Kachpur"];

  // Recoil states
  const [travellingStart, setTravellingStart] =
    useRecoilState(travellingStartState);
  const [startLocation, setStartLocation] = useRecoilState(startLocationState);
  const [gointoLocation, setGoingToLocation] =
    useRecoilState(goingtoLocationState);

  const handleChange = (event) => {
    setTravellingStart(event.target.value);
  };

  const handleTrvellingFrom = (event) => {
    setStartLocation(event?.target?.value);
  };

  const handleGoingTo = (event) => {
    setGoingToLocation(event.target.value);
  };

  let travelStartingArr;
  let goingtoArr;

  if (travellingStart === "Chandpur") {
    travelStartingArr = location1;
    goingtoArr = location2;
  } else {
    travelStartingArr = location2;
    goingtoArr = location1;
  }

  useEffect(() => {
    if (travellingStart === "Dhaka") {
      setStartLocation("Gulistan");
      setGoingToLocation("Chandpur");
    } else {
      setStartLocation("Chandpur");
      setGoingToLocation("Gulistan");
    }
  }, [travellingStart]);

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-[1.5rem] md:gap-[2.5rem] bg-white md:w-fit py-[1.5rem] px-[20px] md:px-[3rem]">
      {/* ////// travel start ///// */}
      <div className="w-[140px] flex flex-col gap-[.5rem]">
        <label className="text-[14px] text-gray-500" htmlFor="travellingFrom">
          Travelling From
        </label>
        <div>
          <FormControl size="small">
            <Select
              displayEmpty
              value={travellingStart}
              onChange={handleChange}
              IconComponent={MdKeyboardArrowDown}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <p className="font-[500] text-gray-600">Chandpur</p>;
                }
                return (
                  <p className="font-[500] text-gray-600">{travellingStart}</p>
                );
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
              <MenuItem value={"Chandpur"}>
                <p className="text-[14px] text-gray-600">Chandpur</p>
              </MenuItem>
              <MenuItem value={"Dhaka"}>
                <p className="text-[14px] text-gray-600">Dhaka</p>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="w-[100%] flex items-center justify-between md:gap-[2.5rem]">
        {/* ////// travelling from ///// */}
        <div className="flex flex-col items-center gap-[.5rem]">
          <HiFlag className="text-[1.7rem] text-gray-500" />
          <div>
            <FormControl size="small">
              <Select
                displayEmpty
                value={travellingStart}
                onChange={handleTrvellingFrom}
                IconComponent={MdKeyboardArrowDown}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <p className="font-[500] text-gray-600">
                        {startLocation}
                      </p>
                    );
                  }
                  return (
                    <p className="font-[500] text-gray-600">{startLocation}</p>
                  );
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
                {travelStartingArr?.map((el) => (
                  <MenuItem key={el} value={el}>
                    <p className="text-[14px] text-gray-600">{el}</p>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <p className="text-gray-500 text-[13px]">From</p>
        </div>
        {/* ///// swap icon ///// */}
        <div>
          <AiOutlineSwap className="text-[1.5rem] text-gray-500" />
        </div>
        {/* ////// going to ////// */}
        <div className="flex flex-col items-center gap-[.5rem]">
          <HiFlag className="text-[1.7rem] text-gray-500" />
          <div>
            <FormControl size="small">
              <Select
                displayEmpty
                value={gointoLocation}
                onChange={handleGoingTo}
                IconComponent={MdKeyboardArrowDown}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <p className="font-[500] text-gray-600">
                        {gointoLocation}
                      </p>
                    );
                  }
                  return (
                    <p className="font-[500] text-gray-600">{gointoLocation}</p>
                  );
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
                {goingtoArr?.map((el) => (
                  <MenuItem key={el} value={el}>
                    <p className="text-[14px] text-gray-600">{el}</p>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <p className="text-gray-500 text-[13px]">To</p>
        </div>
      </div>
    </div>
  );
};

export default InputGroupTwo;
