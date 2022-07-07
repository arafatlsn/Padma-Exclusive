import React, { useContext, useEffect } from "react";
import { TicketInfo } from "../../App";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { FaSignInAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./SignIn.module.css";
import useAuthentication from "./useAuthentication";
import { Link } from "react-router-dom";
const SingIn = () => {
  const { signInWithGoogle } = useAuthentication();
  const { authentication, setAuthentication } = useContext(TicketInfo);
  useEffect(() => {
    setAuthentication("Sign-In");
  }, []);
  return (
    <div className="bg-white w-[100%] shadow-md shadow-gray-900">
      <div className="w-[60%] mx-auto py-[2rem]">
        <form>
          <div className="flex flex-col gap-[1.5rem]">
            <div className="w-[100%] flex justify-center items-center">
              <label
                htmlFor="emial"
                className="w-[15%] py-[.8rem] flex justify-center bg-primary"
              >
                <MdOutlineEmail className="text-[1.8rem] text-white" />
              </label>
              <input
                type="email"
                className="w-[85%] py-[.82rem] text-[1.4rem] text-gray-800 font-bold font-mono border-primary border-[.13rem]"
                placeholder="Email"
              />
            </div>
            <div className="w-[100%] flex justify-center items-center">
              <label
                htmlFor="emial"
                className="w-[15%] py-[.8rem] flex justify-center bg-primary"
              >
                <AiOutlineLock className="text-[1.8rem] text-white" />
              </label>
              <input
                type="password"
                className="w-[85%] py-[.82rem] text-[1.4rem] text-gray-800 font-bold font-mono border-primary border-[.13rem]"
                placeholder="Password"
              />
            </div>
            <div>
              <button className="w-[100%] bg-primary py-[.72rem] text-[1.3rem] font-bold text-white font-mono flex justify-center items-center gap-[.5rem]">
                <FaSignInAlt />
                {authentication}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-[60%] mx-auto mt-[1rem] pb-[2rem]">
        <div className="flex justify-center items-center gap-[1rem]">
          <span className="font-bold text-[1.5rem] text-primary">
            Sign-In with
          </span>
          <span
            onClick={() => signInWithGoogle()}
            className="text-[1.5rem] bg-secondary px-[.8rem] py-[.3rem] rounded-[.3rem] flex items-center gap-[.3rem] text-green-800 font-semibold cursor-pointer"
          >
            <FcGoogle /> Google
          </span>
        </div>
        <div className="mt-[.5rem] flex justify-center text-[1.1rem]">
          <span className="font-bold text-primary">
            I'm new here.{" "}
            <Link
              to={"/authentication/signup"}
              className="cursor-pointer underline"
            >
              I want an account
            </Link>
          </span>
        </div>
        <div className="mt-[.5rem] flex justify-center">
          <span className="font-bold text-primary cursor-pointer">
            Forgot Password?
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
