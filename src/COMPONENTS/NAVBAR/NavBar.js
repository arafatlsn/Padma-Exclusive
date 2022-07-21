import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TicketInfo } from "../../App";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Drawer, Box, Badge } from "@mui/material";
import useAuthentication from "../Authentication Page/useAuthentication";
import { signOut } from "firebase/auth";
import auth from "../Authentication Page/Firebase.init";

const NavBar = () => {
  const { location, showTicket, setShowTicket, falseTicket } =
    useContext(TicketInfo);
  const [showNav, setShowNav] = useState(false);
  const { user } = useAuthentication();

  window.addEventListener("scroll", () => {
    const catchNav = document.querySelector("#nav-container");
    if (location !== "signin") {
      if (window.scrollY > 50) {
        catchNav.classList.add(
          "bg-[#3256A4]",
          "sticky",
          "animate__animated",
          "animate__fadeInDown",
          "animate__faster"
        );
      } else {
        catchNav.classList.remove(
          "bg-[#3256A4]",
          "sticky",
          "animate__animated",
          "animate__fadeInDown",
          "animate__faster"
        );
        setTimeout(() => {
          catchNav.classList.add(
            "animate__animated",
            "animate__fadeInDown",
            "animate__faster"
          );
        });
      }
    } else {
      catchNav.classList.add("bg-[#3256A4]", "sticky");
    }
  });

  const handleShowNav = () => {
    const menuItems = document.querySelector("#menuList");
    setShowNav(!showNav);
    if (showNav) {
      menuItems.classList.add("hello world");
    } else {
      menuItems.classList.remove("hello world");
    }
  };

  return (
    <>
      <div
        id="nav-container"
        className={`absolute top-0 left-0 right-0 z-50 ${
          location === "signin" && "bg-[#3256A4] shadow-lg  relative"
        }`}
      >
        <header className="lg:w-[70%] mx-auto py-0 lg:py-[.3rem] flex flex-col lg:flex-row items-center justify-items-start">
          <div
            onClick={() => setShowNav(!showNav)}
            className="absolute lg:hidden left-1 top-[1.4rem]"
          >
            <HiMenu className="text-[2.6rem] rounded-sm" />
          </div>
          <div className="lg:w-[28%]">
            <p className="text-[2.5rem] font-bold m-0 text-secondary">
              <i>Padma</i>
            </p>
            <p className="text-[1.5rem] font-semibold mt-[-18px] ml-[31px] text-white">
              Exclusive
            </p>
          </div>

          <div
            id="menuList"
            className={`hidden lg:block justify-self-start ${
              showNav
                ? "flex flex-col items-center gap-[.5rem] animate__animated animate__fadeInDown"
                : "hidden"
            }`}
          >
            <Link className="text-xl font-bold mr-[1rem] text-white" to={"/"}>
              Home
            </Link>
            <Link
              className="text-xl font-bold mx-[1rem] text-white"
              to={"/destinations"}
            >
              Destination
            </Link>
            <button
              onClick={() => {
                setShowTicket(!showTicket);
              }}
              className="text-xl font-bold mx-[1rem] text-white"
            >
              Ticket
            </button>
            <a
              href="https://arafatlsn1.web.app/"
              target="blank"
              className="text-xl font-bold mx-[1rem] text-white"
              to={"/"}
            >
              About
            </a>
            {!user?.email ? (
              <Link
                className="text-xl font-bold mx-[1rem] text-white"
                to={"/authentication"}
              >
                SignIn
              </Link>
            ) : (
              <Link
                onClick={() => {
                  signOut(auth);
                }}
                className="text-xl font-bold mx-[1rem] text-white"
                to={"/authentication"}
              >
                SignOut
              </Link>
            )}
          </div>
          <Drawer open={showNav} anchor="top">
            {/* h-[100vh] w-[100vw] bg-[#3256A4] */}
            <Box
              width="100vw"
              height={"100vh"}
              className="bg-[#3256A4] animate__animated animate__fadeInDownBig "
            >
              <div className="flex flex-col items-center">
                <div className="lg:w-[28%] mt-[.7rem]">
                  <p className="text-[2.3rem] font-bold m-0 text-secondary">
                    <i>Padma</i>
                    <span className="text-white ml-[.5rem] font-semibold">
                      Exclusive
                    </span>
                  </p>
                </div>
                <div onClick={() => setShowNav(!showNav)}>
                  <MdClose className="bg-black text-primary absolute bottom-[1rem] right-[1rem] text-[2.6rem] rounded-sm border-gray-800 border-[3px]" />
                </div>
              </div>
              <div className="h-[75%] flex flex-col items-center justify-evenly">
                <Link
                  onClick={() => setShowNav(!showNav)}
                  className="text-3xl font-bold mr-[1rem] text-white"
                  to={"/"}
                >
                  Home
                </Link>
                <Link
                  onClick={() => setShowNav(!showNav)}
                  className="text-3xl font-bold mx-[1rem] text-white"
                  to={"/destinations"}
                >
                  Destination
                </Link>
                <button
                  onClick={() => {
                    setShowNav(!showNav);
                    setShowTicket(!showTicket);
                  }}
                  className="text-3xl font-bold mx-[1rem] text-white"
                >
                  Ticket
                </button>
                <a
                  href="https://arafatlsn1.web.app/"
                  target="blank"
                  onClick={() => setShowNav(!showNav)}
                  className="text-3xl font-bold mx-[1rem] text-white"
                  to={"/"}
                >
                  About
                </a>
                {!user?.email ? (
                  <Link
                    onClick={() => setShowNav(!showNav)}
                    className="text-3xl font-bold mx-[1rem] text-white"
                    to={"/authentication"}
                  >
                    SignIn
                  </Link>
                ) : (
                  <Link
                    onClick={() => {
                      setShowNav(!showNav);
                      signOut(auth);
                    }}
                    className="text-3xl font-bold mx-[1rem] text-white"
                    to={"/authentication"}
                  >
                    SignOut
                  </Link>
                )}
              </div>
            </Box>
          </Drawer>
        </header>
      </div>
    </>
  );
};

export default NavBar;
