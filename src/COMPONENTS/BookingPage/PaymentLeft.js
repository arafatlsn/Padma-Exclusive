import React from 'react';
import busVector from '../../Assets/bus-vector.jpg'

const PaymentLeft = () => {
  return (
    <div className='w-[100%]'>
      <img className='w-[200px] md:w-[100%] object-contain mx-auto' src={busVector} alt="bus" />
    </div>
  );
};

export default PaymentLeft;