import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { useSelector } from "react-redux";

const FooterBottom = () => {
  const darkMode = useSelector((state) => state.BazarioReducer.darkMode);

  return (
    <div className={`w-full group ${
      darkMode ? 'bg-darkBg' : 'bg-[#F5F5F3]'
    }`}>
      <div className={`max-w-container mx-auto border-t-[1px] ${
        darkMode ? 'border-darkBorder' : 'border-gray-200'
      } pt-10 pb-20`}>
        <p className={`text-titleFont font-normal text-center flex md:items-center justify-center ${
          darkMode ? 'text-gray-400' : 'text-lightText'
        } duration-200 text-sm`}>
          <span className={`text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex ${
            darkMode ? 'text-indianYellow' : 'text-primeColor'
          }`}>
            <AiOutlineCopyright />
          </span>
          Copyright 2024 | Bazario | All Rights Reserved |
          <a href="https://namastebazaar.com/" target="_blank" rel="noreferrer">
            <span className={`ml-1 font-medium ${
              darkMode 
                ? 'group-hover:text-indianYellow' 
                : 'group-hover:text-primeColor'
            }`}>
              Made with ❤️ in India
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
