import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import DestinationCard from "./DestinationCard";

const Destinations = () => {
  const { data: allDestinations, isLoading } = useQuery(
    "all-destinatins",
    async () => {
      const { data } = await axios.get(
        "https://infinite-cliffs-95793.herokuapp.com/destinations"
      );
      return data;
    }
  );
  if (isLoading) {
    return;
  }

  return (
    <div className="bg-[#F2F6FF] pt-[5rem] pb-[8rem]">
      <h1 className="text-[2.7rem] pb-[1.5rem] font-bold text-center text-deepGray">
        Destinations
      </h1>
      <div className="flex justify-center items-center mb-[3.5rem]">
        <p className="bg-primary h-[.3rem] w-[5rem] m-0"></p>
      </div>
      <div className="w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-3 justify-center justify-items-center gap-[5rem]">
        {allDestinations.map((el) => (
          <DestinationCard key={el._id} el={el}></DestinationCard>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
