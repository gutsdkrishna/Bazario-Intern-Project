import React from "react";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";
import { useSelector } from "react-redux";

const Sale = () => {
  const darkMode = useSelector((state) => state.BazarioReducer.darkMode);
  return (
    <div className={`py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10 ${
      darkMode ? 'bg-darkBg' : 'bg-white'
    }`}>
      <div className="w-full md:w-2/3 lg:w-1/2 h-full">
        <Link to="/shop">
          <div className={`relative overflow-hidden rounded-lg ${
            darkMode ? 'border border-darkBorder' : ''
          }`}>
            <Image className="h-full w-full object-cover" imgSrc={saleImgOne} />
            <div className={`absolute bottom-4 left-4 ${
              darkMode ? 'text-indianYellow' : 'text-primeColor'
            }`}>
              <h2 className="text-2xl font-bold">Traditional Collection</h2>
              <p className="text-sm">Discover the essence of Indian heritage</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <div className={`relative overflow-hidden rounded-lg ${
              darkMode ? 'border border-darkBorder' : ''
            }`}>
              <Image className="h-full w-full object-cover" imgSrc={saleImgTwo} />
              <div className={`absolute bottom-4 left-4 ${
                darkMode ? 'text-indianYellow' : 'text-primeColor'
              }`}>
                <h2 className="text-2xl font-bold">Handcrafted Items</h2>
                <p className="text-sm">Artisanal excellence at its finest</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <div className={`relative overflow-hidden rounded-lg ${
              darkMode ? 'border border-darkBorder' : ''
            }`}>
              <Image className="h-full w-full object-cover" imgSrc={saleImgThree} />
              <div className={`absolute bottom-4 left-4 ${
                darkMode ? 'text-indianYellow' : 'text-primeColor'
              }`}>
                <h2 className="text-2xl font-bold">Festival Specials</h2>
                <p className="text-sm">Celebrate with style and tradition</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
