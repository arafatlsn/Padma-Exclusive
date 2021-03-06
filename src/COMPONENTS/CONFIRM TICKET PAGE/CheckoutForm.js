import React, { useContext, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { SiFampay } from "react-icons/si";
import { TbCurrencyTaka } from "react-icons/tb";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";
import useAuthentication from "../Authentication Page/useAuthentication";
import { TicketInfo } from "../../App";

const CheckoutForm = ({
  cost,
  bookingTicket,
  setShowModal,
  setShowPayment,
  reFetch,
  setReFetch,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuthentication();

  const [secretKey, setSecretKey] = useState("");

  const { setShowLoader } = useContext(TicketInfo);

  useEffect(() => {
    const func = async () => {
      const { data } = await axios.post(
        "https://infinite-cliffs-95793.herokuapp.com/paymentIntent",
        {
          cost,
        }
      );
      if (data.clientSecret) {
        setSecretKey(data.clientSecret);
      }
    };
    func();
  }, [cost]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clientName = e?.target?.clientName?.value;
    await setShowLoader(true)

    if (!clientName) {
      setShowLoader(false)
      toast.error("Please give Your Name");
      return;
    }

    if (!stripe || !elements) {
      setShowLoader(false)
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      setShowLoader(false)
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setShowLoader(false)
      toast.error(error?.message);
    } else {
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        secretKey,
        {
          payment_method: {
            card,
            billing_details: {
              name: `${clientName}`,
            },
          },
        }
      );
      if (error) {
        setShowLoader(false)
        toast.error(error.message);
      } else {
        setShowLoader(false)
        toast.success("SUCCEEDED! Thank you");
        bookingTicket(paymentIntent?.id);
        setShowModal(false);
        setShowPayment(false);
        setReFetch(!reFetch);
      }
    }
  };

  return (
    <>
      <div className="flex items-center gap-[1rem]">
        <p className="uppercase font-bold text-primary m-0">total cost:</p>
        <h1 className="font-semibold text-[1.8rem] text-green-700">
          {cost} <span className="text-[1rem]">BDT </span>
        </h1>
      </div>
      <form className="flex flex-col gap-[.5rem] pb-[1rem] lg:pb-0" onSubmit={handleSubmit}>
        <div>
          <label
            className="font-mono text-[1.1rem] font-bold text-primary uppercase shadow-xl"
            htmlFor="clientName"
          >
            Your Name
          </label>{" "}
          <br />
          <input
            className="text-[1.2rem] rounded-sm w-[320px] lg:w-[380px] px-[.5rem] bg-gray-300 border-none font-semibold font-mono text-primary"
            name="clientName"
            id="clientName"
            defaultValue={user?.displayName}
            type="text"
          />
        </div>
        <div>
          <label
            className="font-mono text-[1.1rem] font-bold text-primary uppercase shadow-xl"
            htmlFor="payment-method"
          >
            Payment Method
          </label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "17px",
                  color: "#3256a4",
                  fontWeight: "700",
                  "::placeholder": {
                    color: "#3256a4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
            className="rounded-sm w-[320px] lg:w-[380px] px-[.2rem] py-[.5rem] bg-gray-300"
          />
        </div>
        <div className="flex gap-[1rem] items-center">
          <button
            type="submit"
            className="text-green-800 bg-green-300 px-[.8rem] py-[.1rem] rounded-[.3rem] font-bold hover:bg-green-400 transition-all flex items-center gap-[.2rem] mt-[1rem]"
            disabled={!stripe}
          >
            <SiFampay /> Pay{" "}
            <span className="flex items-center">
              <TbCurrencyTaka className="text-[1.5rem]" />
              {cost}
            </span>
          </button>
          <button
            onClick={() => {
              setShowModal(false);
              setShowPayment(false);
            }}
            className="text-red-800 bg-red-300 px-[.8rem] py-[.1rem] rounded-[.3rem] font-bold hover:bg-red-400 transition-all flex items-center gap-[.2rem] mt-[1rem]"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
