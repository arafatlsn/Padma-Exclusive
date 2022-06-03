import React from "react";

const DepartDate = ({ setDepartDate }) => {
  let day = new Date();

  let nextDay = new Date(day);
  nextDay.setDate(day.getDate() + 1);
  nextDay.toString().split(' ').slice(0, 4)
  let thirdDay = new Date(day);
  thirdDay.setDate(day.getDate() + 2);
  let fourthDay = new Date(day);
  fourthDay.setDate(day.getDate() + 3);
  let fifthDay = new Date(day);
  fifthDay.setDate(day.getDate() + 4);

  const todayArr = day.toString().split(' ').slice(0, 4);
  const nextDateArr = nextDay.toString().split(' ').slice(0, 4);
  const thirdDayArr = thirdDay.toString().split(' ').slice(0, 4);
  const fourthDayArr = fourthDay.toString().split(' ').slice(0, 4);
  const fifthDayArr = fifthDay.toString().split(' ').slice(0, 4);



  return (
    <div className="absolute top-30">
      <button
        onClick={() => setDepartDate(`${todayArr[0]} ${todayArr[1]} ${todayArr[2]} ${todayArr[3]}`)}
        className="w-[240px] text-xl text-primary hover:bg-primary hover:text-white font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between"
      >
        {`${todayArr[0]} ${todayArr[1]} ${todayArr[2]} ${todayArr[3]}`}
      </button>
      <button
        onClick={() => setDepartDate(`${nextDateArr[0]} ${nextDateArr[1]} ${nextDateArr[2]} ${nextDateArr[3]}`)}
        className="w-[240px] text-xl text-primary hover:bg-primary hover:text-white font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between"
      >
        {`${nextDateArr[0]} ${nextDateArr[1]} ${nextDateArr[2]} ${nextDateArr[3]}`}
      </button>
      <button
        onClick={() => setDepartDate(`${thirdDayArr[0]} ${thirdDayArr[1]} ${thirdDayArr[2]} ${thirdDayArr[3]}`)}
        className="w-[240px] text-xl text-primary hover:bg-primary hover:text-white font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between"
      >
        {`${thirdDayArr[0]} ${thirdDayArr[1]} ${thirdDayArr[2]} ${thirdDayArr[3]}`}
      </button>
      <button
        onClick={() => setDepartDate(`${fourthDayArr[0]} ${fourthDayArr[1]} ${fourthDayArr[2]} ${fourthDayArr[3]}`)}
        className="w-[240px] text-xl text-primary hover:bg-primary hover:text-white font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between"
      >
        {`${fourthDayArr[0]} ${fourthDayArr[1]} ${fourthDayArr[2]} ${fourthDayArr[3]}`}
      </button>
      <button
        onClick={() => setDepartDate(`${fifthDayArr[0]} ${fifthDayArr[1]} ${fifthDayArr[2]} ${fifthDayArr[3]}`)}
        className="w-[240px] text-xl text-primary hover:bg-primary hover:text-white font-bold text-left px-[1rem] py-[.5rem] border bg-white flex items-center justify-between"
      >
        {`${fifthDayArr[0]} ${fifthDayArr[1]} ${fifthDayArr[2]} ${fifthDayArr[3]}`}
      </button>
    </div>
  );
};

export default DepartDate;
