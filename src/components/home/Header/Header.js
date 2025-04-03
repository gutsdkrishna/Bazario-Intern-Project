import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsSun, BsMoon } from "react-icons/bs";
import { motion } from "framer-motion";
import { logo, logoLight } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  return (
    <div className={`w-full h-20 sticky top-0 z-50 border-b-[1px] ${
      darkMode ? 'bg-darkBg border-darkBorder' : 'bg-white border-gray-200'
    }`}>
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          <Link to="/">
            <div>
              <Image className="w-20 object-cover" imgSrc={logo} />
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? 'text-indianYellow hover:bg-darkBorder' : 'text-primeColor hover:bg-gray-100'
              }`}
            >
              {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
            </button>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2"
              >
                <>
                  {navBarList.map(({ _id, title, link }) => (
                    <NavLink
                      key={_id}
                      className={`flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base ${
                        darkMode 
                          ? 'text-gray-400 hover:text-indianYellow' 
                          : 'text-[#767676] hover:text-[#262626]'
                      } hover:underline underline-offset-[4px] decoration-[1px] md:border-r-[2px] ${
                        darkMode ? 'border-darkBorder' : 'border-gray-300'
                      } hoverEffect last:border-r-0`}
                      to={link}
                      state={{ data: location.pathname.split("/")[1] }}
                    >
                      <li>{title}</li>
                    </NavLink>
                  ))}
                </>
              </motion.ul>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className={`inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            />
            {sidenav && (
              <div className={`fixed top-0 left-0 w-full h-screen ${
                darkMode ? 'bg-darkBg bg-opacity-95' : 'bg-black bg-opacity-80'
              } text-gray-200 z-50`}>
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className={`w-full h-full ${
                    darkMode ? 'bg-darkBg' : 'bg-primeColor'
                  } p-6`}>
                    <img
                      className="w-28 mb-6"
                      src={logoLight}
                      alt="logoLight"
                    />
                    <ul className="text-gray-200 flex flex-col gap-2">
                      {navBarList.map((item) => (
                        <li
                          className={`font-normal hover:font-bold items-center text-lg ${
                            darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-gray-200 hover:text-white'
                          } hover:underline underline-offset-[4px] decoration-[1px] md:border-r-[2px] ${
                            darkMode ? 'border-darkBorder' : 'border-gray-300'
                          } hoverEffect last:border-r-0`}
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h1
                        onClick={() => setCategory(!category)}
                        className={`flex justify-between text-base cursor-pointer items-center font-titleFont mb-2 ${
                          darkMode ? 'text-gray-400' : 'text-gray-200'
                        }`}
                      >
                        Shop by Category{" "}
                        <span className="text-lg">{category ? "-" : "+"}</span>
                      </h1>
                      {category && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSedenavLi">Traditional Wear</li>
                          <li className="headerSedenavLi">Handcrafted Items</li>
                          <li className="headerSedenavLi">Home Decor</li>
                          <li className="headerSedenavLi">Spices & Food</li>
                          <li className="headerSedenavLi">Jewelry</li>
                        </motion.ul>
                      )}
                    </div>
                    <div className="mt-4">
                      <h1
                        onClick={() => setBrand(!brand)}
                        className={`flex justify-between text-base cursor-pointer items-center font-titleFont mb-2 ${
                          darkMode ? 'text-gray-400' : 'text-gray-200'
                        }`}
                      >
                        Shop by Brand
                        <span className="text-lg">{brand ? "-" : "+"}</span>
                      </h1>
                      {brand && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSedenavLi">Artisan Crafts</li>
                          <li className="headerSedenavLi">Heritage Textiles</li>
                          <li className="headerSedenavLi">Traditional Jewelry</li>
                          <li className="headerSedenavLi">Handloom Weaves</li>
                          <li className="headerSedenavLi">Artisanal Pottery</li>
                        </motion.ul>
                      )}
                    </div>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className={`w-8 h-8 border-[1px] ${
                      darkMode ? 'border-darkBorder text-gray-400' : 'border-gray-300 text-gray-300'
                    } absolute top-2 -right-10 text-2xl flex justify-center items-center cursor-pointer hover:border-indianRed hover:text-indianRed duration-300`}
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;
