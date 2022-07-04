import { Table } from "flowbite-react";
import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { FaMoneyBillWave } from "react-icons/fa";

const BuyNowTicketConfirm = ({
  singleDestionation,
  showModal,
  setShowModal,
  setBusId,
  setAvailableSeats,
  setDeparture,
  setArrival,
  setPrice
}) => {
  const { data: allTickets, isLoading } = useQuery("tickets", async () => {
    const { data } = await axios.get(`http://localhost:5000/tickets?date=${new Date().toDateString()}`);
    return data;
  });

  if (isLoading) {
    return;
  }

  return (
    <div className="w-[70%] mx-auto mt-[5rem] shadow-lg border-lg">
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
                    setShowModal(!showModal);
                    setBusId(el.busId);
                    setAvailableSeats(el?.availableSeats);
                    setDeparture(el?.departure);
                    setArrival(el?.arrival);
                    setPrice(singleDestionation?.cost);
                  }}
                  className="bg-secondary text-primary hover:bg-primary hover:text-white transition-all duration-[.2s] ease-linear font-semibold px-[1rem] py-[.5rem] text-[1.1rem] rounded-md flex gap-[.2rem]"
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
  );
};

export default BuyNowTicketConfirm;
