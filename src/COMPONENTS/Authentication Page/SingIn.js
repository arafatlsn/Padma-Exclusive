import React, { useContext, useEffect, useState } from "react";
import { TicketInfo } from "../../App";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { FaSignInAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuthentication from "./useAuthentication";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ResetPassConfrmModal from "./ResetPassConfrmModal";
import toast from "react-hot-toast";
import "./SignIn.css";

const SingIn = () => {
  const {
    user,
    signInWithGoogle,
    loadingGoogle,
    signInWithEmailAndPassword,
    errorSignEmailPass,
    sendPasswordResetEmail,
  } = useAuthentication();
  const { authentication, setAuthentication, setShowLoader } =
    useContext(TicketInfo);
  const [openConfrmModal, setOpenConfrmModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    setAuthentication("Sign-In");
  }, []);

  useEffect(() => {
    if(errorSignEmailPass?.message.length){
      toast.error(errorSignEmailPass?.message?.split("/")[1]?.split(")")[0]);
    }
  }, [errorSignEmailPass])

  const submitForm = async (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;
    setShowLoader(true);
    await signInWithEmailAndPassword(userEmail, userPassword);
    setShowLoader(false);
  };

  const handleResetLink = async () => {
    await sendPasswordResetEmail(userEmail);
    toast.success("Password reset link sent your email");
    setOpenConfrmModal(false);
  };

  if (user?.email) {
    navigate(from, { replace: true });
  }

  return (
    <>
      <div className="bg-white w-[100%] shadow-md shadow-gray-900">
        <div className="w-[95%] lg:w-[60%] mx-auto py-[2rem]">
          <form onSubmit={submitForm}>
            <div className="flex flex-col gap-[1.5rem]">
              <div className="w-[100%] flex justify-center items-center">
                <label
                  htmlFor="email"
                  className="w-[15%] py-[.8rem] flex justify-center bg-gray-500"
                >
                  <MdOutlineEmail className="text-[1.8rem] text-white" />
                </label>
                <input
                  onChange={(e) => setUserEmail(e.target.value)}
                  type="email"
                  className="w-[85%] py-[.95rem] focus:py-[.90rem] text-[1.4rem] text-gray-800 bg-gray-400 font-bold font-mono border-none"
                  placeholder="Email"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="w-[100%] flex justify-center items-center">
                <label
                  htmlFor="password"
                  className="w-[15%] py-[.8rem] flex justify-center bg-gray-500"
                >
                  <AiOutlineLock className="text-[1.8rem] text-white" />
                </label>
                <input
                  type="password"
                  className="w-[85%] py-[.95rem] focus:py-[.88rem] text-[1.4rem] text-gray-800 bg-gray-400 font-bold font-mono border-none"
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
        <div className="w-[95%] lg:w-[60%] mx-auto mt-[1rem] pb-[2rem]">
          <div className="flex justify-center items-center gap-[1rem]">
            <span className="font-bold text-[1.5rem] text-primary">
              Sign-In with
            </span>
            <span
              onClick={async () => {
                setShowLoader(true);
                await signInWithGoogle();
                setShowLoader(false);
              }}
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
          <div
            onClick={() => {
              const validateEmail = (email) => {
                return String(email)
                  .toLowerCase()
                  .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  );
              };

              const isValid = validateEmail(userEmail);

              if (!isValid) {
                toast.error("Please give a valid email");
              } else {
                setOpenConfrmModal(true);
              }
            }}
            className="mt-[.5rem] flex justify-center"
          >
            <span className="font-bold text-primary cursor-pointer">
              Forgot Password?
            </span>
          </div>
        </div>
      </div>
      {openConfrmModal && (
        <ResetPassConfrmModal
          setOpenConfrmModal={setOpenConfrmModal}
          handleResetLink={handleResetLink}
        />
      )}
    </>
  );
};

export default SingIn;
