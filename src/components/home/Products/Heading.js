import React from "react";
import { useSelector } from "react-redux";

const Heading = ({ heading }) => {
  const darkMode = useSelector((state) => state.BazarioReducer.darkMode);
  return (
    <div className={`text-3xl font-semibold pb-6 ${
      darkMode ? 'text-indianYellow' : 'text-primeColor'
    }`}>
      {heading}
    </div>
  );
};

export default Heading;
