import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div className={`lg:w-[70%] mt-[1rem] absolute left-0 right-0 z-50 mx-auto`}>
      <header className="grid grid-cols-3 items-center justify-between">
        <div>
          <p className="text-[2.5rem] font-bold m-0 text-secondary">
            <i>Padma</i>
          </p>
          <p className="text-[1.5rem] font-semibold mt-[-18px] ml-[31px] text-white">Exclusive</p>
        </div>
        <div>
          <Link className="text-xl font-bold mx-[1.5rem] text-white" to={"/"}>Home</Link>
          <Link className="text-xl font-bold mx-[1.5rem] text-white" to={"/destinations"}>Destination</Link>
          <Link className="text-xl font-bold mx-[1.5rem] text-white" to={"/"}>Bookings</Link>
          <Link className="text-xl font-bold mx-[1.5rem] text-white" to={"/"}>Ticket</Link>
          <Link className="text-xl font-bold mx-[1.5rem] text-white" to={"/"}>About</Link>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
