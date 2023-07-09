import React from "react";
import StepperComp from "./StepperComp";
import { useRecoilState } from "recoil";
import { stepState } from "../../Atom/booking.atom";
import SelectBus from "./SelectBus";
import SelectSeatModal from "./SelectSeat";
import ConfirmPayment from "./ConfirmPayment";

const RightSide = () => {
  const [stepValue] = useRecoilState(stepState);
  return (
    <div className="w-[100%]">
      <StepperComp />
      <div className="mt-[3rem]">
        {stepValue === 0 || stepValue === 1 ? (
          <SelectBus />
        ) : (
          <ConfirmPayment />
        )}
      </div>
      <SelectSeatModal />
    </div>
  );
};

export default RightSide;
