import React, { useContext, useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { FaSignInAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import "./SignIn.css";
import useAuthentication from "./useAuthentication";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TicketInfo } from "../../App";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    user,
    createUserWithEmailAndPassword,
    updateProfile,
    errorCreateEmailPass,
  } = useAuthentication();
  const { authentication, setAuthentication } = useContext(TicketInfo);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    setAuthentication("Sign-Up");
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const isValid = validateEmail(userEmail);

    if (!isValid) {
      toast.error("Please Give a Valid Email");
    } else {
      const userName = e.target.name.value;
      const userEmail = e.target.email.value;
      const userPassword = e.target.password.value;

      await createUserWithEmailAndPassword(userEmail, userPassword);
      await updateProfile({ displayName: userName });
      e.target.reset();
    }
  };

  if (errorCreateEmailPass?.message) {
    toast.error(errorCreateEmailPass?.message?.split("/")[1]?.split(")")[0]);
  }

  if (user?.email) {
    navigate(from, { replace: true });
  }

  return (
    <div className="bg-white w-[100%] shadow-md shadow-gray-900">
      <div className="w-[95%] lg:w-[60%] mx-auto py-[2rem]">
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
                required
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
                onChange={(e) => setUserEmail(e.target.value)}
                type="email"
                className="w-[85%] py-[.82rem] text-[1.4rem] text-gray-800 font-bold font-mono border-primary border-[.13rem]"
                placeholder="Email"
                name="email"
                id="email"
                required
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
                required
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
