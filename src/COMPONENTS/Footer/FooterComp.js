import { Footer } from "flowbite-react";
import React, { useContext } from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
import "./FooterComp.css";
import { TicketInfo } from "../../App";

const FooterComp = () => {
  const { location } = useContext(TicketInfo);
  console.log(location);
  return (
    <div className={`${location === 'signin' && 'hidden'}`}>
      <Footer className={`flex flex-col rounded-[0%]`}>
        <div className="grid w-full sm:flex sm:justify-between md:flex md:grid-cols-1 lg:flex justify-center">
          <div className="mx-auto">
            <div className="mx-auto">
              <p className="text-[2.5rem] font-bold m-0 text-secondary">
                <i>Padma</i>
              </p>
              <p className="text-[1.5rem] font-semibold mt-[-18px] ml-[31px] text-gray-500">
                Exclusive
              </p>
            </div>
          </div>
          <div className="w-[70%] grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                About
              </h2>
              <Footer.LinkGroup className="flex-col">
                <Footer.Link className="mb-4">Padma Exclusive</Footer.Link>
                <Footer.Link className="mb-4">About Me</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Follow us
              </h2>
              <Footer.LinkGroup className="flex-col">
                <Footer.Link className="mb-4">Gitub</Footer.Link>
                <Footer.Link className="mb-4">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Legal
              </h2>
              <Footer.LinkGroup className="flex-col">
                <Footer.Link className="mb-4" href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link className="mb-4" href="#">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <hr className="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Padma Exclusive™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/arafat.hossan.lisan/"
              className="text-gray-400 hover:text-gray-900"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/arafatlsn/"
              className="text-gray-400 hover:text-gray-900"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://github.com/arafatlsn"
              className="text-gray-400 hover:text-gray-900"
              icon={BsGithub}
            />
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterComp;
