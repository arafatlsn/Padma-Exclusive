import React from "react";
import InputGroupTwo from "./InputGroupTwo";
import InputGroupOne from "./InputGroupOne";
import FindTicketButton from "./FindTicketButton";

const BookingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-[2rem]">
      <InputGroupOne />
      <InputGroupTwo />
       <FindTicketButton />
    </div>
  );
};

export default BookingForm;
