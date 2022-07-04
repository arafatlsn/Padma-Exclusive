import { Button, Modal } from "flowbite-react";
import React, { useContext, useState } from "react";
import { RiBusFill } from "react-icons/ri";
import { TicketInfo } from "../../App";
import "./BuyTicketModal.css";
import { SiFampay } from "react-icons/si";
import { TbCurrencyTaka } from "react-icons/tb";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import {
  Elements,
} from "@stripe/react-stripe-js";
import axios from "axios";

const stripePromise = loadStripe(`${process.env.REACT_APP_publishableKey}`);
const BuyTicketModal = ({
  showModal,
  setShowModal,
  availableSeats,
  departure,
  arrival,
  busId,
  price,
}) => {
  const { travelFrom, travellingTo, selectPassengers, departDate } =
    useContext(TicketInfo);

  const [showPayment, setShowPayment] = useState(false);
  const formSubmit = (e) => {
    e.preventDefault();
  };

  const bookingTicket = async(transactiontId) => {
    const { data } = await axios.post("http://localhost:5000/bookTicket", { travelFrom, travellingTo, selectPassengers, departDate, departure,
    arrival,
    busId, cost: `${price * selectPassengers}`, transactiontId })
  }

  return (
    <React.Fragment>
      <Modal show={showModal} onClose={() => setShowModal(!showModal)}>
        <div className="modal-body-container shadow-xl">
          <div className="extra-div">
            <div className="flex gap-[.8rem]">
              <div className="ticket-img-div">
                <img
                  className="h-[30vh] object-contain"
                  src="ticketbus.jpg"
                  alt=""
                />
              </div>
              <div className="mt-[.3rem]">
                {!showPayment ? (
                  <form onSubmit={formSubmit}>
                    <div className="flex gap-[1.5rem]">
                      <div className="form-children-parent">
                        <div>
                          <label
                            className="font-mono text-[1.1rem] text-gray-100 uppercase shadow-xl"
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
                            className="font-mono text-[1.1rem] text-gray-100 uppercase shadow-xl"
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
                            className="font-mono text-[1.1rem] text-gray-100 uppercase shadow-xl"
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
                            className="font-mono text-[1.1rem] text-gray-100 uppercase shadow-xl"
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
                            className="font-mono text-[1.1rem] text-gray-100 uppercase shadow-xl"
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
                            className="font-mono text-[1.1rem] text-gray-100 uppercase shadow-xl"
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
                            className="font-mono text-[1.1rem] text-gray-100 uppercase shadow-xl"
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
                          <h1 className="text-[1.7rem] font-semibold text-secondary">
                            <i>Padma Exclusive</i>
                          </h1>
                          <p className="m-0 absolute right-0 font-[550] text-white mt-[-.5rem]">
                            Nice Tour
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-[.8rem] flex justify-between items-center">
                      <div>
                        <p className="flex items-center">
                          <span className="text-gray-100 text-[1.1rem] font-bold">
                            Cost:
                          </span>{" "}
                          <span className="text-secondary font-semibold text-[1.3rem] flex items-center">
                            <TbCurrencyTaka className="text-white text-[1.8rem]" />{" "}
                            {price * selectPassengers}
                          </span>
                        </p>
                      </div>
                      <div className="flex gap-[1rem]">
                        <button
                          onClick={() => setShowPayment(true)}
                          className="text-primary bg-green-300 px-[.8rem] py-[.1rem] rounded-[.3rem] font-bold hover:bg-green-200 transition-all flex items-center gap-[.2rem]"
                        >
                          <SiFampay /> Pay
                        </button>
                        <button
                          onClick={() => {
                            setShowModal(false);
                            setShowPayment(false);
                          }}
                          className="text-primary bg-red-300 px-[1rem] py-[.1rem] rounded-[.3rem] font-bold hover:bg-red-200 transition-all"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div>
                    <Elements stripe={stripePromise}>
                      <CheckoutForm cost={price * selectPassengers} bookingTicket={bookingTicket} />
                    </Elements>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default BuyTicketModal;
