import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { paginationItems } from "../../../constants";

const HeaderBottom = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const darkMode = useSelector((state) => state.orebiReducer.darkMode);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [show, ref]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = paginationItems.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className={`w-full relative ${
      darkMode ? 'bg-darkBg' : 'bg-[#F5F5F3]'
    }`}>
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div
            onClick={() => setShow(!show)}
            ref={ref}
            className={`flex h-14 cursor-pointer items-center gap-2 ${
              darkMode ? 'text-indianYellow' : 'text-primeColor'
            }`}
          >
            <HiOutlineMenuAlt4 className="w-5 h-5" />
            <p className="text-[14px] font-normal">Shop by Category</p>

            {show && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`absolute top-36 z-50 ${
                  darkMode ? 'bg-darkBg border border-darkBorder' : 'bg-primeColor'
                } w-auto ${
                  darkMode ? 'text-gray-400' : 'text-[#767676]'
                } h-auto p-4 pb-6`}
              >
                <li className={`${
                  darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-gray-400 hover:text-white'
                } px-4 py-1 border-b-[1px] ${
                  darkMode ? 'border-darkBorder hover:border-indianYellow' : 'border-b-gray-400 hover:border-b-white'
                } duration-300 cursor-pointer`}>
                  Traditional Wear
                </li>
                <li className={`${
                  darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-gray-400 hover:text-white'
                } px-4 py-1 border-b-[1px] ${
                  darkMode ? 'border-darkBorder hover:border-indianYellow' : 'border-b-gray-400 hover:border-b-white'
                } duration-300 cursor-pointer`}>
                  Handcrafted Items
                </li>
                <li className={`${
                  darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-gray-400 hover:text-white'
                } px-4 py-1 border-b-[1px] ${
                  darkMode ? 'border-darkBorder hover:border-indianYellow' : 'border-b-gray-400 hover:border-b-white'
                } duration-300 cursor-pointer`}>
                  Home Decor
                </li>
                <li className={`${
                  darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-gray-400 hover:text-white'
                } px-4 py-1 border-b-[1px] ${
                  darkMode ? 'border-darkBorder hover:border-indianYellow' : 'border-b-gray-400 hover:border-b-white'
                } duration-300 cursor-pointer`}>
                  Spices & Food
                </li>
                <li className={`${
                  darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-gray-400 hover:text-white'
                } px-4 py-1 border-b-[1px] ${
                  darkMode ? 'border-darkBorder hover:border-indianYellow' : 'border-b-gray-400 hover:border-b-white'
                } duration-300 cursor-pointer`}>
                  Jewelry
                </li>
                <li className={`${
                  darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-gray-400 hover:text-white'
                } px-4 py-1 border-b-[1px] ${
                  darkMode ? 'border-darkBorder hover:border-indianYellow' : 'border-b-gray-400 hover:border-b-white'
                } duration-300 cursor-pointer`}>
                  Art & Crafts
                </li>
              </motion.ul>
            )}
          </div>
          <div className={`relative w-full lg:w-[600px] h-[50px] text-base ${
            darkMode ? 'text-darkText' : 'text-primeColor'
          } ${
            darkMode ? 'bg-darkBorder' : 'bg-white'
          } flex items-center gap-2 justify-between px-6 rounded-xl`}>
            <input
              className={`flex-1 h-full outline-none ${
                darkMode ? 'bg-darkBorder text-darkText placeholder:text-gray-500' : 'placeholder:text-[#C4C4C4]'
              } placeholder:text-[14px]`}
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Search for traditional Indian products..."
            />
            <FaSearch className={`w-5 h-5 ${
              darkMode ? 'text-indianYellow' : 'text-primeColor'
            }`} />
            {searchQuery && (
              <div
                className={`w-full mx-auto h-96 ${
                  darkMode ? 'bg-darkBg border border-darkBorder' : 'bg-white'
                } top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {searchQuery &&
                  filteredProducts.map((item) => (
                    <div
                      onClick={() =>
                        navigate(
                          `/product/${item.productName
                            .toLowerCase()
                            .split(" ")
                            .join("")}`,
                          {
                            state: {
                              item: item,
                            },
                          }
                        ) &
                        setShowSearchBar(true) &
                        setSearchQuery("")
                      }
                      key={item._id}
                      className={`max-w-[600px] h-28 ${
                        darkMode ? 'bg-darkBorder' : 'bg-gray-100'
                      } mb-3 flex items-center gap-3`}
                    >
                      <img className="w-24" src={item.img} alt="productImg" />
                      <div className="flex flex-col gap-1">
                        <p className={`font-semibold text-lg ${
                          darkMode ? 'text-darkText' : 'text-primeColor'
                        }`}>
                          {item.productName}
                        </p>
                        <p className={`text-xs ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>{item.des}</p>
                        <p className={`text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          Price:{" "}
                          <span className={`${
                            darkMode ? 'text-indianYellow' : 'text-primeColor'
                          } font-semibold`}>
                            ${item.price}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            <div onClick={() => setShowUser(!showUser)} className={`flex ${
              darkMode ? 'text-indianYellow' : 'text-primeColor'
            }`}>
              <FaUser />
              <FaCaretDown />
            </div>
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`absolute top-6 left-0 z-50 ${
                  darkMode ? 'bg-darkBg border border-darkBorder' : 'bg-primeColor'
                } w-44 ${
                  darkMode ? 'text-gray-400' : 'text-[#767676]'
                } h-auto p-4 pb-6`}
              >
                <Link to="/signin">
                  <li className={`${
                    darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-gray-400 hover:text-white'
                  } px-4 py-1 border-b-[1px] ${
                    darkMode ? 'border-darkBorder hover:border-indianYellow' : 'border-b-gray-400 hover:border-b-white'
                  } duration-300 cursor-pointer`}>
                    Login
                  </li>
                </Link>
                <Link onClick={() => setShowUser(false)} to="/signup">
                  <li className={`${
                    darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-gray-400 hover:text-white'
                  } px-4 py-1 border-b-[1px] ${
                    darkMode ? 'border-darkBorder hover:border-indianYellow' : 'border-b-gray-400 hover:border-b-white'
                  } duration-300 cursor-pointer`}>
                    Sign Up
                  </li>
                </Link>
                <li className={`${
                  darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-gray-400 hover:text-white'
                } px-4 py-1 border-b-[1px] ${
                  darkMode ? 'border-darkBorder hover:border-indianYellow' : 'border-b-gray-400 hover:border-b-white'
                } duration-300 cursor-pointer`}>
                  Profile
                </li>
                <li className={`${
                  darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-gray-400 hover:text-white'
                } px-4 py-1 border-b-[1px] ${
                  darkMode ? 'border-darkBorder hover:border-indianYellow' : 'border-b-gray-400 hover:border-b-white'
                } duration-300 cursor-pointer`}>
                  Orders
                </li>
              </motion.ul>
            )}
            <Link to="/cart">
              <div className="relative">
                <FaShoppingCart className={darkMode ? 'text-indianYellow' : 'text-primeColor'} />
                <span className={`absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full ${
                  darkMode ? 'bg-indianYellow text-darkBg' : 'bg-primeColor text-white'
                }`}>
                  {products.length > 0 ? products.length : 0}
                </span>
              </div>
            </Link>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
