import React from 'react';
import { MdWifiTethering, MdAirlineSeatReclineExtra } from 'react-icons/md'
import { FaBus } from 'react-icons/fa'
import { RiSecurePaymentFill } from 'react-icons/ri'

const OurAdvantage = () => {
  return (
    <div className='py-[5rem] w-[70%] mx-auto'>
      <h1 className='text-[2.2rem] lg:text-[2.7rem] pb-[1.5rem] font-bold text-center text-deepGray'>Our Advantage</h1>
      <div className='flex justify-center items-center mb-[3.5rem]'>
        <p className='bg-primary h-[.3rem] w-[5rem] m-0'></p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-[2.5rem] lg:gap-0'>
        <div>
          <p className='text-[6rem] text-white flex justify-center mb-[2rem]'><MdWifiTethering className='bg-primary py-[1rem] rounded-[50%] outline outline-[lightgray] outline-[2px] outline-offset-[.8rem] hover:outline-offset-[.4rem] transition-all'/></p>
          <p className='text-[1.5rem] text-center font-bold text-deepGray leading-[1.8rem]'>Free Wi-Fi</p>
          <p className='text-[dimgray] text-center leading-[1.1rem]'>All buses are equipped with Wi-Fi and sockets</p>
        </div>

        <div>
          <p className='text-[6rem] text-white flex justify-center mb-[2rem]'><FaBus className='bg-primary py-[1rem] rounded-[50%] outline outline-[lightgray] outline-[2px] outline-offset-[.8rem] hover:outline-offset-[.4rem] transition-all'/></p>
          <p className='text-[1.5rem] text-center font-bold text-deepGray leading-[1.8rem]'>Shuttle to the Bus</p>
          <p className='text-[dimgray] text-center leading-[1.1rem]'>Free taxi to the bus</p>
        </div>

        <div>
          <p className='text-[6rem] text-white flex justify-center mb-[2rem]'><MdAirlineSeatReclineExtra className='bg-primary py-[1rem] rounded-[50%] outline outline-[lightgray] outline-[2px] outline-offset-[.8rem] hover:outline-offset-[.4rem] transition-all'/></p>
          <p className='text-[1.5rem] text-center font-bold text-deepGray leading-[1.8rem]'>Comfortable Seats</p>
          <p className='text-[dimgray] text-center leading-[1.1rem]'>You can spend 12 hours without any discomfort in our seats</p>
        </div>

        <div>
          <p className='text-[6rem] text-white flex justify-center mb-[2rem]'><RiSecurePaymentFill className='bg-primary py-[1rem] rounded-[50%] outline outline-[lightgray] outline-[2px] outline-offset-[.8rem] hover:outline-offset-[.4rem] transition-all'/></p>
          <p className='text-[1.5rem] text-center font-bold text-deepGray leading-[1.8rem]'>Different ways of buying tickets</p>
          <p className='text-[dimgray] text-center leading-[1.1rem]'>Cash, Visa, MasterCard, etc</p>
        </div>
      </div>
    </div>
  );
};

export default OurAdvantage;