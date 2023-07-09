import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import TicketCard from "./TicketCard";
import { useRecoilState } from "recoil";

import {
  goingtoLocationState,
  selectDateState,
  startLocationState,
} from "../../Atom/booking.atom";

const timeArr = (time) => {
  const param = time;
  let hour;
  const erasingSpace = param?.split(" ");
  const erasingColon = erasingSpace[0]?.split(":");
  if (erasingSpace[1] === "PM") {
    hour = Number(erasingColon[0]) + 12;
  } else {
    hour = Number(erasingColon[0]);
  }
  return hour;
};

const SelectBus = () => {
  const [startLocation] = useRecoilState(startLocationState);
  const [gointoLocation] = useRecoilState(goingtoLocationState);
  const [selectedData] = useRecoilState(selectDateState);

  const { data, isFetching, refetch } = useQuery("tickets", async () => {
    const res = await axios.get(
      `http://localhost:5000/api/v1/tickets/get-all-tickets?from=${startLocation}&selectedDate=${selectedData?.toDateString()}`
    );
    const filteredResponse = res?.data?.filter((el) => {
      const getTime = timeArr(
        el?.destinations?.length && el?.destinations[0]?.journeyStart
      );
      const selectedDate = new Date(selectedData);
      const nowTime = new Date().getTime()
      selectedDate.setHours(getTime)
      selectedDate.setMinutes(0)
      selectedDate.setSeconds(0)
      const selectedDateGetTime = selectedDate.getTime()
      if(selectedDateGetTime > nowTime){
        return el
      } 
    });
    return(filteredResponse);
  });

  if (isFetching) {
    return <p>loading.....</p>;
  }

  return (
    <div className="w-[100%] grid justify-items-center grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[3px] px-[10px] py-[15px] border">
      {data?.map((el) => (
        <TicketCard data={el} />
      ))}
    </div>
  );
};

export default SelectBus;
