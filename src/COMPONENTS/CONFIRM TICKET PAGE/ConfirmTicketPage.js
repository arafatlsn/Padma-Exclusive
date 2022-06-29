import axios from "axios";
import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { TicketInfo } from "../../App";
import BuyNowTicketConfirm from "./BuyNowTicketConfirm";
import BuyTicketModal from "./BuyTicketModal";
import ConfirmPageBanner from "./ConfirmPageBanner";
import FindBusTicketConfirm from "./FindBusTicketConfirm";

const ConfirmTicketPage = () => {
  const [travelTo, setTravelTo] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { travelFrom, setTravelFrom, travellingTo, setTravellingTo, departDate, setDepartDate, selectTicketType, setSelectTicketType } = useContext(TicketInfo);

  const [availableSeats, setAvailableSeats] = useState([]);
  const [busId, setBusId] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [price, setPrice] = useState('');

  const {
    data: singleDestionation,
    isLoading,
    refetch,
  } = useQuery("singleDestination", async () => {
    const from = travelFrom;
    const to = travellingTo;
    const { data } = await axios.get(
      `http://localhost:5000/destinationid?destinationDistance=${
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
      ></BuyNowTicketConfirm>
      <BuyTicketModal
        showModal={showModal}
        setShowModal={setShowModal}
        singleDestionation={singleDestionation}
        availableSeats={availableSeats}
        departure={departure}
        arrival={arrival}
        busId={busId}
        price={price}
      ></BuyTicketModal>
    </div>
  );
};

export default ConfirmTicketPage;
