import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import DestinationCard from "./DestinationCard";

const Destinations = () => {
  const { data: allDestinations, isLoading } = useQuery(
    "all-destinatins",
    async () => {
      const { data } = await axios.get("http://localhost:5000/destinations");
      return data;
    }
  );
  if (isLoading) {
    return;
  }

  return (
    <div className="bg-[#F2F6FF]">
      <div className="w-[70%] mx-auto grid grid-cols-3 justify-center justify-items-center gap-[5rem]">
        {allDestinations.map((el) => (
          <DestinationCard key={el._id} el={el}></DestinationCard>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
