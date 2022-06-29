import { Button, Modal } from "flowbite-react";
import React, { useContext } from "react";
import { RiBusFill } from "react-icons/ri";
import { TicketInfo } from "../../App";
import "./BuyTicketModal.css";
import { SiFampay } from 'react-icons/si'

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

  return (
    <React.Fragment>
      <Modal show={showModal} onClose={() => setShowModal(!showModal)}>
        <div className="bg-primary text-white ">
          <h1 className="flex items-center gap-[.3rem] text-[1.8rem] px-[.5rem] font-[500] text-secondary">
            {" "}
            <RiBusFill className="text-[2rem] text-secondary" /> Padma Exclusive
          </h1>
        </div>
        <div className="modal-body-container">
          <div className="extra-div">
            <div className="flex gap-[1.5rem]">
              <div className="ticket-img-div">
                <img
                  className="h-[30vh] object-contain"
                  src="ticketbus.jpg"
                  alt=""
                />
              </div>
              <div className="">
                <form>
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
                      <p>
                        <span className="text-gray-100 text-[1.1rem] font-bold">
                          Cost:
                        </span>{" "}
                        <span className="text-secondary font-semibold text-[1.3rem]">
                          ${price * selectPassengers}
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-[1rem]">
                      <button className="text-primary bg-green-300 px-[.8rem] py-[.1rem] rounded-[.3rem] font-bold hover:bg-green-200 transition-all flex items-center gap-[.2rem]"><SiFampay/> Pay</button>
                      <button onClick={() => setShowModal(false)} className="text-primary bg-red-300 px-[1rem] py-[.1rem] rounded-[.3rem] font-bold hover:bg-red-200 transition-all">Cancel</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default BuyTicketModal;
