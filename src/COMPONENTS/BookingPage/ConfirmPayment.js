import React from "react";
import PaymentLeft from "./PaymentLeft";
import PaymentRight from "./PaymentRight";

const ConfirmPayment = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-[3rem] pb-[3rem]">
      <PaymentLeft />
      <PaymentRight />
    </div>
  );
};

export default ConfirmPayment;
