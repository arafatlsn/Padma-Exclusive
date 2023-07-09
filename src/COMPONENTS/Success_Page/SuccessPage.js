import React, { useRef } from "react";
import successgif from "../../Assets/success.gif";
import { BiHome, BiPrinter } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import TicketComp from "./TicketComp";
import { useQuery } from "react-query";
import axios from "axios";
import NotFoundComp from "../Not_Found/NotFoundComp";
import { useReactToPrint } from "react-to-print";

const SuccessPage = () => {
  const navigate = useNavigate();
  const { tId } = useParams();
  const { data } = useQuery("ticket", async () => {
    const res = await axios.get(
      `http://localhost:5000/api/v1/tickets/get-ticket?tId=${tId}`
    );
    return res?.data;
  });

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  if (!data?.from) {
    return <NotFoundComp />;
  }

  return (
    <div className="min-h-[120vh] md:min-h-screen flex flex-col items-center justify-center">
      <img
        className="w-[300px] object-contain"
        src={successgif}
        alt="success-gif"
      />
      <div className="flex flex-col items-center gap-[.5rem] mt-[1rem]">
        <h1 className="text-green-400 text-[1.1rem] font-[600] font-mono">
          You SUCCESSFULLY booked your seats!
        </h1>
        <p className="text-[13px] text-gray-600 text-center mb-[.5rem]">
          Your Transaction Id: {tId}
        </p>
        <div className="w-[100vw] overflow-auto">
          <TicketComp refValue={componentRef} data={data} />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-[.5rem] mt-[2rem]">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-[7px] text-gray-500 px-[2.3rem] py-[.5rem] rounded-[4px]"
          >
            <BiHome className="text-[1.3rem] translate-y-[-.2rem]" /> Go to
            HomePage
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-[7px] text-gray-500 px-[2.3rem] py-[.5rem] rounded-[4px]"
          >
            <BiPrinter className="text-[1.3rem] translate-y-[-.2rem]" /> Print
            Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
