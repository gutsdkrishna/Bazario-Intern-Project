import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
import { paymentCard } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { useSelector } from "react-redux";

const Footer = () => {
  const darkMode = useSelector((state) => state.orebiReducer.darkMode);
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Please provide an Email !");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Please give a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };

  return (
    <div className={`w-full py-20 ${
      darkMode ? 'bg-darkBg' : 'bg-[#F5F5F3]'
    }`}>
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6 px-4 gap-10">
        <div className="col-span-2">
          <FooterListTitle title="More about Bazario" />
          <div className="flex flex-col gap-6">
            <p className={`text-base w-full xl:w-[80%] ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Bazario brings you the finest Indian products, from traditional crafts to modern fashion. Experience the rich heritage of India through our curated collection.
            </p>
            <ul className="flex items-center gap-2">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <li className={`w-7 h-7 ${
                  darkMode ? 'bg-indianYellow text-darkBg' : 'bg-primeColor text-gray-100'
                } hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300`}>
                  <FaYoutube />
                </li>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                <li className={`w-7 h-7 ${
                  darkMode ? 'bg-indianYellow text-darkBg' : 'bg-primeColor text-gray-100'
                } hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300`}>
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <li className={`w-7 h-7 ${
                  darkMode ? 'bg-indianYellow text-darkBg' : 'bg-primeColor text-gray-100'
                } hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300`}>
                  <FaFacebook />
                </li>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <li className={`w-7 h-7 ${
                  darkMode ? 'bg-indianYellow text-darkBg' : 'bg-primeColor text-gray-100'
                } hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300`}>
                  <FaLinkedin />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <FooterListTitle title="Shop" />
          <ul className="flex flex-col gap-2">
            <li className={`font-titleFont text-base ${
              darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-lightText hover:text-black'
            } hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300`}>
              Traditional Wear
            </li>
            <li className={`font-titleFont text-base ${
              darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-lightText hover:text-black'
            } hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300`}>
              Handcrafted Items
            </li>
            <li className={`font-titleFont text-base ${
              darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-lightText hover:text-black'
            } hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300`}>
              Home Decor
            </li>
            <li className={`font-titleFont text-base ${
              darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-lightText hover:text-black'
            } hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300`}>
              Spices & Food
            </li>
            <li className={`font-titleFont text-base ${
              darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-lightText hover:text-black'
            } hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300`}>
              New Arrivals
            </li>
          </ul>
        </div>
        <div>
          <FooterListTitle title="Your account" />
          <ul className="flex flex-col gap-2">
            <li className={`font-titleFont text-base ${
              darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-lightText hover:text-black'
            } hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300`}>
              Profile
            </li>
            <li className={`font-titleFont text-base ${
              darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-lightText hover:text-black'
            } hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300`}>
              Orders
            </li>
            <li className={`font-titleFont text-base ${
              darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-lightText hover:text-black'
            } hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300`}>
              Addresses
            </li>
            <li className={`font-titleFont text-base ${
              darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-lightText hover:text-black'
            } hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300`}>
              Account Details
            </li>
            <li className={`font-titleFont text-base ${
              darkMode ? 'text-gray-400 hover:text-indianYellow' : 'text-lightText hover:text-black'
            } hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300`}>
              Payment Options
            </li>
          </ul>
        </div>
        <div className="col-span-2 flex flex-col items-center w-full px-4">
          <FooterListTitle title="Subscribe to our newsletter." />
          <div className="w-full">
            <p className={`text-center mb-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Stay updated with our latest products and exclusive offers!
            </p>
            {subscription ? (
              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center text-base font-titleFont font-semibold text-indianGreen"
              >
                Subscribed Successfully !
              </motion.p>
            ) : (
              <div className="w-full flex-col xl:flex-row flex justify-between items-center gap-4">
                <div className="flex flex-col w-full">
                  <input
                    onChange={(e) => setEmailInfo(e.target.value)}
                    value={emailInfo}
                    className={`w-full h-12 border-b ${
                      darkMode ? 'border-darkBorder text-darkText' : 'border-gray-400 text-primeColor'
                    } bg-transparent px-4 text-lg placeholder:text-base outline-none`}
                    type="text"
                    placeholder="Insert your email ...*"
                  />
                  {errMsg && (
                    <p className="text-indianRed text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                      {errMsg}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSubscription}
                  className={`${
                    darkMode 
                      ? 'bg-indianYellow text-darkBg hover:bg-indianRed' 
                      : 'bg-white text-lightText hover:bg-black hover:text-white'
                  } w-[30%] h-10 duration-300 text-base tracking-wide`}
                >
                  Subscribe
                </button>
              </div>
            )}

            <Image
              className={`w-[80%] lg:w-[60%] mx-auto ${
                subscription ? "mt-2" : "mt-6"
              }`}
              imgSrc={paymentCard}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
