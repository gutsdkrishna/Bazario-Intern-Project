import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useSelector } from "react-redux";

const SamplePrevArrow = (props) => {
  const darkMode = useSelector((state) => state.orebiReducer.darkMode);
  const { onClick } = props;
  return (
    <div
      className={`w-14 h-14 rounded-full ${
        darkMode ? 'text-darkBg bg-indianYellow' : 'text-white bg-black bg-opacity-40'
      } hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center absolute z-10 top-[35%] left-2`}
      onClick={onClick}
    >
      <span>
        <FaLongArrowAltLeft />
      </span>
    </div>
  );
};

export default SamplePrevArrow;
