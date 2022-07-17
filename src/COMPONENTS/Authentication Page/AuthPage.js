import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { TicketInfo } from "../../App";
import "./SignIn.css";
import image from '../../Assets/background2.jpg'

const AuthPage = () => {
  const { setLocation, authentication } = useContext(TicketInfo);

  useEffect(() => {
    setLocation("signin");
  }, []);

  const time = new Date().getHours();

  let greetings;

  if (time >= 5 && time <= 11) {
    greetings = "Good morning";
  } else if (time > 12 && time <= 13) {
    greetings = "Good noon";
  } else if (time > 13 && time <= 16) {
    greetings = "Good afternoon";
  } else if (time > 16 && time <= 19) {
    greetings = "Good evening";
  } else {
    greetings = "Good night";
  }

  return (
    <div className="bg-[#3256A4] w-[100vw]">
      <div className="h-[90.96vh] lg:w-[40vw] mx-auto flex flex-col justify-center items-center">
        <div className="shadow-md shadow-gray-900">
          <div className="relative">
            <img
              className="lg:w-[40vw] lg:h-[30vh] object-cover object-center"
              src={image}
              alt=""
            />
            <div
              className="lg:w-[40vw] lg:h-[30vh] absolute top-0 flex justify-center items-center"
              style={{ background: "rgba(50, 86, 164, .7)" }}
            >
              <div>
                <h1 className="text-[4rem] text-white font-bold font-mono">
                  {authentication}
                </h1>
                <p className="m-0 text-white font-semibold text-[1.3rem] text-center">
                  {greetings}, Sir
                </p>
              </div>
            </div>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthPage;
