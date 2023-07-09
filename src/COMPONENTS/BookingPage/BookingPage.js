import React from "react";
import busGif from "../../Assets/bus.gif";
import RightSide from "./RightSide";
import NavigateButton from "../NavigateButton";
import { BiHome } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { stepState } from "../../Atom/booking.atom";

const BookingPage = () => {

  const [stepValue, setStepValue] = useRecoilState(stepState)

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
    setStepValue(0)
  };
  return (
    <div className="max-w-[1366px] mx-auto flex flex-col gap-[3rem] items-center min-h-[100vh] relative">
      <div>
        <img className="h-[300px] object-contain" src={busGif} alt="" />
      </div>
      <div className="flex justify-center w-[100%]">
        <RightSide />
      </div>
      <NavigateButton
        action={navigateToHome}
        icon={<BiHome className="text-red-500 text-[1.5rem]" />}
      />
    </div>
  );
};

export default BookingPage;
