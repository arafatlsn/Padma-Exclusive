import React from "react";
import failed from "../../Assets/failed.webp";
import { BiHome } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const FailedPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img
        className="w-[300px] object-contain"
        src={failed}
        alt="success-gif"
      />
      <div className="flex flex-col items-center gap-[.5rem] mt-[1rem]">
        <h1 className="text-red-400 text-[2rem] font-[600] font-mono">
          Payment Failed!
        </h1>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-[7px] text-gray-500 px-[2.3rem] py-[.5rem] rounded-[4px]"
        >
          <BiHome className="text-[1.3rem] translate-y-[-.2rem]" /> Go to
          HomePage
        </button>
      </div>
    </div>
  );
};

export default FailedPage;
