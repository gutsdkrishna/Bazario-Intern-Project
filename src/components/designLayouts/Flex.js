import React from "react";
import { useSelector } from "react-redux";

const Flex = ({ children, className }) => {
  const darkMode = useSelector((state) => state.BazarioReducer.darkMode);
  return (
    <div className={`${className} ${
      darkMode ? 'text-darkText' : 'text-primeColor'
    }`}>
      {children}
    </div>
  );
};

export default Flex;
