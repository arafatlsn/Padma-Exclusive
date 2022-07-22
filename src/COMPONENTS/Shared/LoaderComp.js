import React from "react";
import { DotLoader } from "react-spinners";

const LoaderComp = () => {
  return (
    <div className="fixed z-[500] h-0 w-[100%] top-[50%] flex justify-center">
      <div className="flex flex-col items-center w-fit h-fit animate__animated animate__flipInX">
        <DotLoader size={70} color="#F0E319" />
        <h1 className="text-primary font-mono mt-[1rem] text-[1rem] font-bold bg-secondary px-[.4rem] rounded-[.25rem] shadow-md shadow-gray-800">Loading...</h1>
      </div>
    </div>
  );
};

export default LoaderComp;
