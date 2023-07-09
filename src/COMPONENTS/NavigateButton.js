import React from 'react';

const NavigateButton = ({icon, action}) => {
  return (
    <button onClick={action} className='bg-[#4862F290] px-[.7rem] py-[.7rem] rounded-[50%] fixed bottom-[1rem] right-[1rem] md:bottom-[3rem] md:right-[3rem] z-[500]'>{icon}</button>
  );
};

export default NavigateButton;