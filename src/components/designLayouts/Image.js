import React from "react";
import { useSelector } from "react-redux";

const Image = ({ imgSrc, className }) => {
  const darkMode = useSelector((state) => state.BazarioReducer.darkMode);
  return (
    <img 
      className={`${className} ${
        darkMode ? 'filter brightness-90' : ''
      }`} 
      src={imgSrc} 
      alt={imgSrc} 
    />
  );
};

export default Image;
