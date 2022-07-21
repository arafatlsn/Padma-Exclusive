import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { TicketInfo } from "../../App";
import BuyNowTicketConfirm from "./BuyNowTicketConfirm";
import BuyTicketModal from "./BuyTicketModal";
import ConfirmPageBanner from "./ConfirmPageBanner";
import FindBusTicketConfirm from "./FindBusTicketConfirm";

const ConfirmTicketPage = () => {
  const [travelTo, setTravelTo] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { travelFrom, setTravelFrom, travellingTo, setLocation } =
    useContext(TicketInfo);

  const [availableSeats, setAvailableSeats] = useState([]);
  const [busId, setBusId] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [price, setPrice] = useState("");
  const [reFetch, setReFetch] = useState(false);

  useEffect(() => {
    setLocation("destination");
  });

  const {
    data: singleDestionation,
    isLoading,
    refetch,
  } = useQuery("singleDestination", async () => {
    const from = travelFrom;
    const to = travellingTo;
    const { data } = await axios.get(
      `https://infinite-cliffs-95793.herokuapp.com/destinationid?destinationDistance=${
        from + "_" + to
      }`
    );
    setTravelFrom(data?.from);
    setTravelTo(data?.to);
    return data;
  });

  if (isLoading) {
    return;
  }

  return (
    <div>
      <ConfirmPageBanner
        from={travelFrom}
        to={travelTo}
        refetch={refetch}
      ></ConfirmPageBanner>
      <FindBusTicketConfirm
        travelFrom={travelFrom}
        setTravelFrom={setTravelFrom}
        travelTo={travelTo}
        setTravelTo={setTravelTo}
        refetch={refetch}
        reFetch={reFetch}
        setReFetch={setReFetch}
      ></FindBusTicketConfirm>
      <BuyNowTicketConfirm
        singleDestionation={singleDestionation}
        setBusId={setBusId}
        setAvailableSeats={setAvailableSeats}
        setDeparture={setDeparture}
        setArrival={setArrival}
        showModal={showModal}
        setShowModal={setShowModal}
        setPrice={setPrice}
        reFetch={reFetch}
      ></BuyNowTicketConfirm>
      {showModal && (
        <BuyTicketModal
          showModal={showModal}
          setShowModal={setShowModal}
          singleDestionation={singleDestionation}
          availableSeats={availableSeats}
          departure={departure}
          arrival={arrival}
          busId={busId}
          price={price}
          reFetch={reFetch}
          setReFetch={setReFetch}
        ></BuyTicketModal>
      )}
    </div>
  );
};

export default ConfirmTicketPage;
