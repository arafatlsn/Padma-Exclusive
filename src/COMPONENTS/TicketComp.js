import axios from "axios";
import { Modal } from "flowbite-react";
import React, { useState, useEffect, useContext, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { BiCloudDownload } from "react-icons/bi";
import { TbCurrencyTaka } from "react-icons/tb";
import { useQuery } from "react-query";
import { useReactToPrint } from "react-to-print";
import { TicketInfo } from "../App";
import auth from "./Authentication Page/Firebase.init";
import useAuthentication from "./Authentication Page/useAuthentication";
import ticketImg from "../Assets/ticketImg.jpg";
import "./TicketComp.css";

const TicketComp = ({ showTicket }) => {
  const [user] = useAuthState(auth);
  const [ticket, setTicket] = useState({});
  const [falseTicket, setFalsyTicket] = useState(false);
  const { setShowTicket } = useContext(TicketInfo);
  const componentRef = useRef();

  const {
    travelFrom,
    travellingTo,
    selectPassengers,
    busId,
    departDate,
    departure,
    arrival,
    cost,
  } = ticket;

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    let refresh = false;
    const func = async () => {
      const { data } = await axios.get(
        `https://infinite-cliffs-95793.herokuapp.com/ticket?user=${user?.email}`
      );
      if (data.departDate) {
        const dateString = data.departDate.split(" ");
        const timeString = data.departure.split(":");

        let newTimeString = ``;
        if (timeString[1].includes("a")) {
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
          setTicket(data);
          setFalsyTicket(true);
        } else {
          toast.error("You have no upcoming ticket");
          setFalsyTicket(false);
        }
      } else {
        toast.error("You have no ticket");
      }
    };
    func();
  }, [showTicket]);

  return (
    <>
      {falseTicket && (
        <div className="h-0 sticky top-[50%] z-[100] flex justify-center items-center">
          <div className="animate__animated animate__backInDown">
            <div className="modal-title text-green-700 font-bold  bg-green-300 p-[.3rem]">
              <h1 className="flex text-[1.3rem]">Download Your Ticket</h1>
            </div>
            <div ref={componentRef} className="flex lg:flex-row bg-[#CBECCF]">
              <div>
                <img src={ticketImg} alt="" />
              </div>
              <div>
                <div ref={componentRef}>
                  <div>
                    <form>
                      <div className="flex gap-[1.5rem] pl-[.3rem] pr-[.5rem]">
                        <div className="form-children-parent">
                          <div>
                            <label
                              className="font-mono text-[1.1rem] text-primary font-[600] uppercase"
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
                              className="font-mono text-[1.1rem] text-primary font-[600] uppercase"
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
                              className="font-mono text-[1.1rem] text-primary font-[600] uppercase"
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
                              value={selectPassengers}
                              readOnly
                            />
                          </div>

                          <div>
                            <label
                              className="font-mono text-[1.1rem] text-primary font-[600] uppercase"
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
                              className="font-mono text-[1.1rem] text-primary font-[600] uppercase"
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
                              className="font-mono text-[1.1rem] text-primary font-[600] uppercase"
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
                              className="font-mono text-[1.1rem] text-primary font-[600] uppercase"
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
                        </div>
                      </div>
                      <div className="mt-[.8rem] flex justify-between items-center pl-[.5rem]">
                        <div>
                          <p className="flex items-center">
                            <span className="text-primary text-[1.1rem] font-bold">
                              Cost:
                            </span>{" "}
                            <span className="text-green-400 font-semibold text-[1.8rem] flex items-center">
                              <TbCurrencyTaka className="text-primary text-[1.8rem]" />{" "}
                              {cost}
                            </span>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modalFooter bg-green-300 p-[.5rem] flex items-center gap-[1rem]">
              <button
                onClick={handlePrint}
                className="bg-green-400 font-bold text-green-800 font-mono text-[1.1rem] flex justify-center items-center gap-[.2rem] rounded-md px-[.8rem] py-[.2rem]"
              >
                <BiCloudDownload className="text-[1.3rem]" /> Download
              </button>
              <button
                onClick={() => setShowTicket(false)}
                className="bg-red-300 font-bold text-red-800 font-mono text-[1.1rem] flex justify-center items-center gap-[.2rem] rounded-md px-[.8rem] py-[.2rem]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TicketComp;
