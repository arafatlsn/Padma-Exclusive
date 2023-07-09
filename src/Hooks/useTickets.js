import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const useTickets = () => {
  const {
    data: allTickets,
    isLoading,
    refetch,
  } = useQuery("tickets", async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/tickets/get-all-tickets`
    );
    return data;
  });
  return { allTickets, isLoading, refetch }
};

export default useTickets;
