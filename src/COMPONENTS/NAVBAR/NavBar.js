import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TicketInfo } from "../../App";

const NavBar = () => {

  const { location, showTicket, setShowTicket} = useContext(TicketInfo);

  return (
    <div
        className={`absolute left-0 right-0 z-50 ${location === 'signin' && 'bg-[#3256A4] shadow-lg relative'}`}
      >
        <header className="lg:w-[70%] mx-auto py-[.3rem] flex items-center justify-items-start">
          <div className="lg:w-[28%]">
            <p className="text-[2.5rem] font-bold m-0 text-secondary">
              <i>Padma</i>
            </p>
            <p className="text-[1.5rem] font-semibold mt-[-18px] ml-[31px] text-white">
              Exclusive
            </p>
          </div>
          <div className="justify-self-start">
            <Link className="text-xl font-bold mr-[1rem] text-white" to={"/"}>
              Home
            </Link>
            <Link
              className="text-xl font-bold mx-[1rem] text-white"
              to={"/destinations"}
            >
              Destination
            </Link>
            <Link className="text-xl font-bold mx-[1rem] text-white" to={"/"}>
              Bookings
            </Link>
            <button onClick={() => setShowTicket(!showTicket)} className="text-xl font-bold mx-[1rem] text-white">
              Ticket
            </button>
            <Link className="text-xl font-bold mx-[1rem] text-white" to={"/"}>
              About
            </Link>
            <Link
              className="text-xl font-bold mx-[1rem] text-white"
              to={"/authentication"}
            >
              SignIn
            </Link>
          </div>
        </header>
      </div>
  );
};

export default NavBar;
