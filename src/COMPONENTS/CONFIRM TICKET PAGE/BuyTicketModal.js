import { Modal } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { TicketInfo } from "../../App";
import "./BuyTicketModal.css";
import { SiFampay } from "react-icons/si";
import { TbCurrencyTaka } from "react-icons/tb";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import useAuthentication from "../Authentication Page/useAuthentication";
import toast from "react-hot-toast";
import ticketImg from "../../Assets/ticketImg.jpg";

const stripePromise = loadStripe(`${process.env.REACT_APP_publishableKey}`);
const BuyTicketModal = ({
  showModal,
  setShowModal,
  availableSeats,
  departure,
  arrival,
  busId,
  price,
  reFetch,
  setReFetch,
}) => {
  const { travelFrom, travellingTo, selectPassengers, departDate } =
    useContext(TicketInfo);

  const { user } = useAuthentication();
  const [showPayment, setShowPayment] = useState(false);
  const formSubmit = (e) => {
    e.preventDefault();
  };

  const bookingTicket = async (transactiontId) => {
    const { data } = await axios.post(
      "https://infinite-cliffs-95793.herokuapp.com/bookTicket",
      {
        travelFrom,
        travellingTo,
        selectPassengers: availableSeats.slice(0, selectPassengers),
        departDate,
        departure,
        arrival,
        busId,
        cost: `${price * selectPassengers}`,
        transactiontId,
        user: user?.email,
      }
    );
  };

  return (
    <>
      <div className="fixed top-[50%]  z-50 h-0 w-[100%] mx-auto flex justify-center items-center">
        <div className="animate__animated animate__backInDown">
          <div className="modal-title text-green-700 font-bold  bg-green-300 p-[.3rem]">
            <h1 className="flex text-[1.3rem]">Booking Seat</h1>
          </div>
          <div className="flex">
            <div className="ticket-img-div">
              <img src={ticketImg} alt="" />
            </div>
            <div className="bg-[#CBECCF] pl-[.3rem] pr-[.5rem]">
              {!showPayment ? (
                <form onSubmit={formSubmit}>
                  <div className="flex gap-[1.5rem]">
                    <div className="form-children-parent">
                      <div>
                        <label
                          className="font-mono text-[1.1rem] text-primary font-bold uppercase shadow-xl"
                          htmlFor="from"
                        >
                          From
                        </label>{" "}
                        <br />
                        <input
                          className="w-[120px] px-[.2rem] py-[.1rem] font-semibold font-mono text-gray-700 bg-gray-300"
                          type="text"
                          name="from"
                          id="from"
                          value={travelFrom}
                          readOnly
                        />
                      </div>
                      <div>
                        <label
                          className="font-mono text-[1.1rem] text-primary font-bold uppercase shadow-xl"
                          htmlFor="to"
                        >
                          To
                        </label>{" "}
                        <br />
                        <input
                          className="w-[120px] px-[.2rem] py-[.1rem] font-semibold font-mono text-gray-700 bg-gray-300"
                          name="to"
                          id="to"
                          type="text"
                          value={travellingTo}
                          readOnly
                        />
                      </div>
                      <div>
                        <label
                          className="font-mono text-[1.1rem] text-primary font-bold uppercase shadow-xl"
                          htmlFor="to"
                        >
                          Seats
                        </label>{" "}
                        <br />
                        <input
                          className="w-[120px] px-[.2rem] py-[.1rem] font-semibold font-mono text-gray-700 bg-gray-300"
                          name="to"
                          id="to"
                          type="text"
                          value={availableSeats.slice(0, selectPassengers)}
                          readOnly
                        />
                      </div>

                      <div>
                        <label
                          className="font-mono text-[1.1rem] text-primary font-bold uppercase shadow-xl"
                          htmlFor="from"
                        >
                          Bus id
                        </label>{" "}
                        <br />
                        <input
                          className="w-[120px] px-[.2rem] py-[.1rem] font-semibold font-mono text-gray-700 bg-gray-300"
                          type="text"
                          name="from"
                          id="from"
                          value={busId}
                          readOnly
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label
                          className="font-mono text-[1.1rem] text-primary font-bold uppercase shadow-xl"
                          htmlFor="from"
                        >
                          Date
                        </label>{" "}
                        <br />
                        <input
                          className="w-[160px] px-[.2rem] py-[.1rem] font-semibold font-mono text-gray-700 bg-gray-300"
                          type="text"
                          name="from"
                          id="from"
                          value={departDate}
                          readOnly
                        />
                      </div>
                      <div>
                        <label
                          className="font-mono text-[1.1rem] text-primary font-bold uppercase shadow-xl"
                          htmlFor="from"
                        >
                          Departure
                        </label>{" "}
                        <br />
                        <input
                          className="w-[160px] px-[.2rem] py-[.1rem] font-semibold font-mono text-gray-700 bg-gray-300"
                          type="text"
                          name="from"
                          id="from"
                          value={departure}
                          readOnly
                        />
                      </div>
                      <div>
                        <label
                          className="font-mono text-[1.1rem] text-primary font-bold uppercase shadow-xl"
                          htmlFor="from"
                        >
                          Arrival
                        </label>{" "}
                        <br />
                        <input
                          className="w-[160px] px-[.2rem] py-[.1rem] font-semibold font-mono text-gray-700 bg-gray-300"
                          type="text"
                          name="from"
                          id="from"
                          value={arrival}
                          readOnly
                        />
                      </div>
                      <div className="mt-[.5rem] relative">
                        <h1 className="text-[1.7rem] font-semibold text-primary">
                          <i>Padma Exclusive</i>
                        </h1>
                        <p className="m-0 absolute right-0 font-[550] text-gray-700 mt-[-.5rem]">
                          Nice Tour
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[.8rem] flex justify-between items-center">
                    <div>
                      <p className="flex items-center">
                        <span className="text-primary font-bold text-[1.1rem] font-bold">
                          Cost:
                        </span>{" "}
                        <span className="text-green-500 font-semibold text-[1.3rem] flex items-center">
                          <TbCurrencyTaka className="text-green-500 text-[1.8rem]" />{" "}
                          {price * selectPassengers}
                        </span>
                      </p>
                    </div>
                  </div>
                </form>
              ) : (
                <div>
                  <Elements stripe={stripePromise}>
                    <CheckoutForm
                      reFetch={reFetch}
                      setReFetch={setReFetch}
                      setShowModal={setShowModal}
                      setShowPayment={setShowPayment}
                      cost={price * selectPassengers}
                      bookingTicket={bookingTicket}
                    />
                  </Elements>
                </div>
              )}
            </div>
          </div>
          {!showPayment && (
            <div className="modalFooter bg-green-300 p-[.5rem] flex items-center gap-[1rem]">
              <div className="flex gap-[1rem]">
                <button
                  onClick={() => setShowPayment(true)}
                  className="text-green-800 bg-green-400 px-[.8rem] py-[.1rem] rounded-[.3rem] font-bold hover:bg-green-500 transition-all flex items-center gap-[.2rem]"
                >
                  <SiFampay /> Pay
                </button>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setShowPayment(false);
                  }}
                  className="text-red-800 bg-red-300 px-[1rem] py-[.1rem] rounded-[.3rem] font-bold hover:bg-red-400 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BuyTicketModal;
