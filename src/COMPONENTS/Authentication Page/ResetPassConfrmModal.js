import React from "react";

const ResetPassConfrmModal = ({ setOpenConfrmModal, handleResetLink }) => {
  return (
    <div className="fixed h-0 top-[50%] w-[360px]">
      <div className="bg-[#374151] p-[1rem] rounded-md shadow-md shadow-gray-900 animate__animated animate__backInDown">
        <h1 className="title font-semibold text-white text-center">You're forget your password. Get the reset password link on your Email.</h1>
        <div className="flex justify-center gap-[.5rem] mt-[1rem]">
          <button 
          onClick={handleResetLink}
          className="bg-green-400 text-green-900 px-[1rem] py-[.3rem] rounded-md">Get Link on Email</button>
          <button 
          onClick={() => setOpenConfrmModal(false)}
          className="bg-[#C81E1E] text-white px-[1rem] py-[.3rem] rounded-md">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassConfrmModal;
