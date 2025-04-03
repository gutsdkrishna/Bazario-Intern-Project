import React from "react";
import { useSelector } from "react-redux";

const Badge = ({ text }) => {
  const darkMode = useSelector((state) => state.orebiReducer.darkMode);
  return (
    <div className={`${
      darkMode ? 'bg-indianYellow text-darkBg' : 'bg-primeColor text-white'
    } w-[92px] h-[35px] flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer`}>
      {text}
    </div>
  );
};

export default Badge;
