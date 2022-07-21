import { Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { FaMoneyBillWave } from "react-icons/fa";
import { TicketInfo } from "../../App";
import useAuthentication from "../Authentication Page/useAuthentication";
import toast from "react-hot-toast";

const BuyNowTicketConfirm = ({
  singleDestionation,
  showModal,
  setShowModal,
  setBusId,
  setAvailableSeats,
  setDeparture,
  setArrival,
  setPrice,
  reFetch,
}) => {
  const { user } = useAuthentication();

  const { departDate } = useContext(TicketInfo);
  const {
    data: allTickets,
    isLoading,
    refetch,
  } = useQuery("tickets", async () => {
    const { data } = await axios.get(
      `https://infinite-cliffs-95793.herokuapp.com/tickets?date=${departDate}`
    );
    return data;
  });

  useEffect(() => {
    refetch();
  }, [reFetch]);

  const handleBook = async (
    busId,
    availableSeats,
    departure,
    arrival,
    cost
  ) => {
    const func = async () => {
      const { data } = await axios.get(
        `https://infinite-cliffs-95793.herokuapp.com/ticket?user=${user?.email}`
      );
      if (data?.departDate) {
        const dateString = data.departDate?.split(" ");
        const timeString = data.departure?.split(":");

        let newTimeString = ``;
        if (timeString[1]?.includes("a")) {
          newTimeString = `${
            timeString[0] + ":" + timeString[1].slice(0, 2) + ":" + "00"
          }`;
        } else {
          newTimeString = `${
            Number(timeString[0]) +
            12 +
            ":" +
            timeString[1].slice(0, 2) +
            ":" +
            "00"
          }`;
        }

        const newDateString = `${
          dateString[1] +
          " " +
          dateString[2] +
          ", " +
          dateString[3] +
          " " +
          newTimeString
        }`;
        const today = new Date().getTime();
        const departTime = new Date(newDateString).getTime();

        const isAnyTicket = departTime - today;
        if (isAnyTicket > 0) {
          toast.error("You have an unchecked Ticket");
        } else {
          setShowModal(true);
          setBusId(busId);
          setAvailableSeats(availableSeats);
          setDeparture(departure);
          setPrice(cost);
          setArrival(arrival);
        }
      } else {
        setShowModal(true);
        setBusId(busId);
        setAvailableSeats(availableSeats);
        setDeparture(departure);
        setPrice(cost);
        setArrival(arrival);
      }
    };
    const dateString = departDate.split(" ");
    const timeString = departure.split(":");

    let newTimeString = ``;
    if (timeString[1]?.includes("a")) {
      newTimeString = `${
        timeString[0] + ":" + timeString[1].slice(0, 2) + ":" + "00"
      }`;
    } else {
      newTimeString = `${
        Number(timeString[0]) +
        12 +
        ":" +
        timeString[1].slice(0, 2) +
        ":" +
        "00"
      }`;
    }

    const newDateString = `${
      dateString[1] +
      " " +
      dateString[2] +
      ", " +
      dateString[3] +
      " " +
      newTimeString
    }`;
    const today = new Date().getTime();
    const departTime = new Date(newDateString).getTime();

    const lateDeparture = departTime - today;

    if (lateDeparture > 0) {
      func();
    } else {
      toast.error("Departure already over the time");
    }
  };

  if (isLoading) {
    return;
  }

  return (
    <div className="bg-[#F2F6FF] mt-[4rem] pt-[.5rem] pb-[8rem]">
      <div className="lg:w-[70%] mx-auto mt-[5rem] shadow-lg border-lg">
        <Table hoverable={true}>
          <Table.Head>
            <Table.HeadCell>Departure</Table.HeadCell>
            <Table.HeadCell>Arrival</Table.HeadCell>
            <Table.HeadCell>Bus id</Table.HeadCell>
            <Table.HeadCell>Available Seats</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className="opacity-0">edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {allTickets?.map((el) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{el?.departure}</Table.Cell>
                <Table.Cell>{el?.arrival}</Table.Cell>
                <Table.Cell>{el?.busId}</Table.Cell>
                <Table.Cell>{el?.availableSeats?.length}</Table.Cell>
                <Table.Cell>{singleDestionation?.cost}</Table.Cell>
                <Table.Cell>
                  <button
                    onClick={() => {
                      handleBook(
                        el.busId,
                        el?.availableSeats,
                        el?.departure,
                        el?.arrival,
                        singleDestionation?.cost
                      );
                    }}
                    className="bg-secondary text-primary hover:bg-primary hover:text-white transition-all duration-[.2s] ease-linear font-semibold px-[1rem] py-[.5rem] text-[1.1rem] rounded-md flex gap-[.2rem] whitespace-nowrap"
                  >
                    <FaMoneyBillWave className="text-[1.1rem]" />
                    <p className="m-0">Book Now</p>
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default BuyNowTicketConfirm;
