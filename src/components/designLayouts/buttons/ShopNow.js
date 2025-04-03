import React from "react";
import { useSelector } from "react-redux";

const ShopNow = () => {
  const darkMode = useSelector((state) => state.BazarioReducer.darkMode);
  return (
    <button className={`${
      darkMode ? 'bg-indianYellow text-darkBg' : 'bg-primeColor text-white'
    } text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold`}>
      Shop Now
    </button>
  );
};

export default ShopNow;
