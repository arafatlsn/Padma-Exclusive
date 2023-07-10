import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  seatModalState,
  selectedSeatState,
  stepState,
  ticketState,
} from "../../Atom/booking.atom";
import { Dialog } from "@material-ui/core";
import { BiCheck } from "react-icons/bi";
import SnackBarComp from "../HOME PAGE/SnackBarComp";
import { RiSecurePaymentFill } from "react-icons/ri";

const SelectSeat = () => {
  const [seatModal, setSeatModal] = useRecoilState(seatModalState);
  const [stepValue, setStepValue] = useRecoilState(stepState);
  const [ticket] = useRecoilState(ticketState);
  const [selectedSeats, setSelectedSeats] = useRecoilState(selectedSeatState);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [errorMssg, setErrorMssg] = useState("");

  const addingSelected = (value) => {
    if (ticket?.seats?.indexOf(value) !== -1) {
      const isAdded = selectedSeats?.find((el) => el === value);
      if (!isAdded && selectedSeats?.length < 5) {
        const newSelected = [...selectedSeats, value];
        setSelectedSeats(newSelected);
      } else if (isAdded) {
        const filteredSelected = selectedSeats?.filter((el) => el !== value);
        setSelectedSeats(filteredSelected);
      } else if (selectedSeats?.length === 5) {
        setErrorMssg("You Cna't Select More Seat");
        setShowSnackBar(true);
      }
    } else {
      setErrorMssg("This seat already booked");
      setShowSnackBar(true);
    }
  };

  return (
    <Dialog
      open={seatModal}
      onClose={() => {
        setSeatModal(false);
        setStepValue(0);
      }}
    >
      <div className="px-[25px] py-[20px] w-[300px] md:w-[500px]">
        <h3 className="text-[24px] font-bold text-blue-800 text-center uppercase">
          Book Your Seat
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] md:gap-[1rem] mt-[24px]">
          <div>
            <div className="w-[100%] bg-gray-200 text-gray-700 font-semibold text-center text-[1.2rem] px-[1rem] py-[.3rem]">
              Front
            </div>
            <div className="grid grid-cols-5 gap-y-[.5rem] justify-items-center mt-[1rem]">
              {/* ////// A ////// */}
              <div
                onClick={() => addingSelected("A1")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("A1") !== -1
                    ? "bg-blue-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("A1") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("A1") === -1 ? (
                  "A1"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("A2")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("A2") !== -1
                    ? "bg-blue-500"
                    : "bg-red-500"
                }  ${selectedSeats?.indexOf("A2") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("A2") === -1 ? (
                  "A2"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div></div>
              <div
                onClick={() => addingSelected("A3")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("A3") !== -1
                    ? "bg-blue-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("A3") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("A3") === -1 ? (
                  "A3"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("A4")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("A4") !== -1
                    ? "bg-blue-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("A4") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("A4") === -1 ? (
                  "A4"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              {/* ///// B ///// */}
              <div
                onClick={() => addingSelected("B1")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("B1") !== -1
                    ? "bg-blue-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("B1") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("B1") === -1 ? (
                  "B1"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("B2")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("B2") !== -1
                    ? "bg-blue-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("B2") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("B2") === -1 ? (
                  "B2"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div></div>
              <div
                onClick={() => addingSelected("B3")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("B3") !== -1
                    ? "bg-blue-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("B3") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("B3") === -1 ? (
                  "B3"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("B4")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("B4") !== -1
                    ? "bg-blue-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("B4") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("B4") === -1 ? (
                  "B4"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              {/* ///// C ///// */}
              <div
                onClick={() => addingSelected("C1")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("C1") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("C1") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("C1") === -1 ? (
                  "C1"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("C2")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("C2") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("C2") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("C2") === -1 ? (
                  "C2"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div></div>
              <div
                onClick={() => addingSelected("C3")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("C3") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("C3") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("C3") === -1 ? (
                  "C3"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("C4")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("C4") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("C4") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("C4") === -1 ? (
                  "C4"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              {/* ///// D ///// */}
              <div
                onClick={() => addingSelected("D1")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("D1") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("D1") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("D1") === -1 ? (
                  "D1"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("D2")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("D2") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("D2") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("D2") === -1 ? (
                  "D2"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div></div>
              <div
                onClick={() => addingSelected("D3")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("D3") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("D3") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("D3") === -1 ? (
                  "D3"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("D4")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("D4") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("D4") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("D4") === -1 ? (
                  "D4"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              {/* ///// E ///// */}
              <div
                onClick={() => addingSelected("E1")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("E1") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("E1") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("E1") === -1 ? (
                  "E1"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("E2")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("E2") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("E2") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("E2") === -1 ? (
                  "E2"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div></div>
              <div
                onClick={() => addingSelected("E3")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("E3") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("E3") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("E3") === -1 ? (
                  "E3"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("E4")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("E4") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("E4") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("E4") === -1 ? (
                  "E4"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              {/* ///// F ///// */}
              <div
                onClick={() => addingSelected("F1")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("F1") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("F1") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("F1") === -1 ? (
                  "F1"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("F2")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("F2") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("F2") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("F2") === -1 ? (
                  "F2"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div></div>
              <div
                onClick={() => addingSelected("F3")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("F3") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("F3") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("F3") === -1 ? (
                  "F3"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("F4")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("F4") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("F4") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("F4") === -1 ? (
                  "F4"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              {/* ///// G ///// */}
              <div
                onClick={() => addingSelected("G1")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("G1") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("G1") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("G1") === -1 ? (
                  "G1"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("G2")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("G2") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("G2") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("G2") === -1 ? (
                  "G2"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div></div>
              <div
                onClick={() => addingSelected("G3")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("G3") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("G3") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("G3") === -1 ? (
                  "G3"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("G4")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("G4") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("G4") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("G4") === -1 ? (
                  "G4"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              {/* ///// H ///// */}
              <div
                onClick={() => addingSelected("H1")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("H1") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("H1") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("H1") === -1 ? (
                  "H1"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("H2")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("H2") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("H2") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("H2") === -1 ? (
                  "H2"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div></div>
              <div
                onClick={() => addingSelected("H3")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("H3") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("H3") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("H3") === -1 ? (
                  "H3"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("H4")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("H4") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("H4") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("H4") === -1 ? (
                  "H4"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              {/* ///// I ///// */}
              <div
                onClick={() => addingSelected("I1")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("I1") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("I1") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("I1") === -1 ? (
                  "I1"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("I2")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("I2") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("I2") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("I2") === -1 ? (
                  "I2"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("I3")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("I3") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("I3") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("I3") === -1 ? (
                  "I3"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("I4")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("I4") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("I4") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("I4") === -1 ? (
                  "I4"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
              <div
                onClick={() => addingSelected("I5")}
                className={`flex justify-center items-center w-[40px] h-[40px] text-white rounded-[8px] cursor-pointer transition-all ${
                  ticket?.seats?.indexOf("I5") !== -1
                    ? "bg-gray-500"
                    : "bg-red-500"
                } ${selectedSeats?.indexOf("I5") !== -1 && "bg-secondary"}`}
              >
                {selectedSeats?.indexOf("I5") === -1 ? (
                  "I5"
                ) : (
                  <BiCheck className="text-[1.5rem] text-green-500" />
                )}
              </div>
            </div>
          </div>
          <div className="md:border-l-[2px] pl-[1rem]">
            <div className="flex flex-col gap-[1rem]">
              <div className="flex items-center gap-[6px]">
                <div
                  className={`flex justify-center items-center w-[30px] h-[30px] text-white rounded-[8px] cursor-pointer transition-all bg-blue-500`}
                ></div>
                <p className="text-[1.1rem] text-blue-800 font-[500]">
                  First Class
                </p>
              </div>
              <div className="flex items-center gap-[6px]">
                <div
                  className={`flex justify-center items-center w-[30px] h-[30px] text-white rounded-[8px] cursor-pointer transition-all bg-gray-500`}
                ></div>
                <p className="text-[1.1rem] text-blue-800 font-[500]">
                  Economy Class
                </p>
              </div>
              <div className="flex items-center gap-[6px]">
                <div
                  className={`flex justify-center items-center w-[30px] h-[30px] text-white rounded-[8px] cursor-pointer transition-all bg-red-500`}
                ></div>
                <p className="text-[1.1rem] text-blue-800 font-[500]">Booked</p>
              </div>
              <div className="flex items-center gap-[6px]">
                <div
                  className={`flex justify-center items-center w-[30px] h-[30px] text-white rounded-[8px] cursor-pointer transition-all bg-secondary`}
                ></div>
                <p className="text-[1.1rem] text-blue-800 font-[500]">
                  Selected
                </p>
              </div>
            </div>
            <div className="mt-[1.5rem]">
              <h6 className="text-[1.2rem] text-red-800 font-[500]">
                Selected Seats: {selectedSeats?.length}/5
              </h6>
              <p className="text-gray-700 font-[500]">{`Total: ${
                ticket?.destinations?.length &&
                ticket?.destinations[0]?.cost * selectedSeats?.length
              } BDT`}</p>
            </div>
            <div className="mt-[1rem]">
              <button
                onClick={() => {
                  if (selectedSeats?.length) {
                    setSeatModal(false);
                    setStepValue(2);
                  } else {
                    setErrorMssg("Plese Select Your Seat");
                    setShowSnackBar(true);
                  }
                }}
                className="flex items-center gap-[6px] bg-blue-800 text-white px-[2rem] h-[38px] text-[1.1rem] uppercase font-semibold rounded-[4px] tracking-wider"
              >
                <RiSecurePaymentFill className="text-[1.3rem]" /> Payment
              </button>
            </div>
          </div>
        </div>
      </div>
      <SnackBarComp
        showSnackBar={showSnackBar}
        setShowSnackBar={setShowSnackBar}
        message={errorMssg}
      />
    </Dialog>
  );
};

export default SelectSeat;
