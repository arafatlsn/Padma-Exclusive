import React, { useContext, useEffect } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { FaSignInAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import "./SignIn.css";
import useAuthentication from "./useAuthentication";
import { Link } from "react-router-dom";
import { TicketInfo } from "../../App";

const SignUp = () => {
  const { createUserWithEmailAndPassword, updateProfile } = useAuthentication();
  const { authentication, setAuthentication } = useContext(TicketInfo);
  useEffect(() => {
    setAuthentication("Sign-Up");
  }, []);

  const submitForm = async(e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;

    await createUserWithEmailAndPassword(userEmail, userPassword)
    await updateProfile({ displayName: userName })
    e.target.reset()

  }


  return (
    <div className="bg-white w-[100%] shadow-md shadow-gray-900">
      <div className="w-[60%] mx-auto py-[2rem]">
        <form onSubmit={submitForm}>
          <div className="flex flex-col gap-[1.5rem]">
            <div className="w-[100%] flex justify-center items-center">
              <label
                htmlFor="name"
                className="w-[15%] py-[.8rem] flex justify-center bg-primary"
              >
                <MdDriveFileRenameOutline className="text-[1.8rem] text-white" />
              </label>
              <input
                type="text"
                className="w-[85%] py-[.82rem] text-[1.4rem] text-gray-800 font-bold font-mono border-primary border-[.13rem]"
                placeholder="Name"
                name="name"
                id="name"
              />
            </div>
            <div className="w-[100%] flex justify-center items-center">
              <label
                htmlFor="email"
                className="w-[15%] py-[.8rem] flex justify-center bg-primary"
              >
                <MdOutlineEmail className="text-[1.8rem] text-white" />
              </label>
              <input
                type="email"
                className="w-[85%] py-[.82rem] text-[1.4rem] text-gray-800 font-bold font-mono border-primary border-[.13rem]"
                placeholder="Email"
                name="email"
                id="email"
              />
            </div>
            <div className="w-[100%] flex justify-center items-center">
              <label
                htmlFor="password"
                className="w-[15%] py-[.8rem] flex justify-center bg-primary"
              >
                <AiOutlineLock className="text-[1.8rem] text-white" />
              </label>
              <input
                type="password"
                className="w-[85%] py-[.82rem] text-[1.4rem] text-gray-800 font-bold font-mono border-primary border-[.13rem]"
                placeholder="Password"
                name="password"
                id="password"
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
        <div className="mt-[.5rem] flex justify-center text-[1.1rem]">
          <Link to={"/authentication"} className="cursor-pointer text-primary">
            Back to Sign-in page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
