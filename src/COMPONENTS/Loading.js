import React from 'react';
import loadinGif from '../Assets/loading.gif'

const Loading = () => {
  return (
    <div className='h-[400px] flex flex-col items-center justify-center gap-[2rem]'>
      <img className='w-[200px] object-contain' src={loadinGif} alt="" />
      <p className='text-[1.5rem] text-gray-400 font-bold'>Loading....</p>
    </div>
  );
};

export default Loading;