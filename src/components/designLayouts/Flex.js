import React from "react";
import { useSelector } from "react-redux";

const Flex = ({ children, className }) => {
  const darkMode = useSelector((state) => state.orebiReducer.darkMode);
  return (
    <div className={`${className} ${
      darkMode ? 'text-darkText' : 'text-primeColor'
    }`}>
      {children}
    </div>
  );
};

export default Flex;
