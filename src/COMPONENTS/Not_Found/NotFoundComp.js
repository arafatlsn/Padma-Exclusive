import React from "react";
import notFoundImg from "../../Assets/not-found.gif";
import { BiHome } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const NotFoundComp = () => {
  return (
    <div className="h-screen w-[100%] flex flex-col justify-center items-center">
      <img src={notFoundImg} alt="" />
      <NavLink to={"/"}>
        <button className="flex items-center gap-[7px] text-gray-400">
          <BiHome className="translate-y-[-.2rem] text-[1.3rem]" /> Back to Home
        </button>
      </NavLink>
    </div>
  );
};

export default NotFoundComp;
