import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [quizDropdownOpen, setQuizDropdownOpen] = useState(false);
  const [historyDropdownOpen, setHistoryDropdownOpen] = useState(false);

  const letToggle = () => {
    setToggle(!toggle);
    setQuizDropdownOpen(false);
    setHistoryDropdownOpen(false);
  };

  const toggleQuizDropdown = () => {
    setQuizDropdownOpen(!quizDropdownOpen);
    setHistoryDropdownOpen(false);
  };

  const toggleHistoryDropdown = () => {
    setHistoryDropdownOpen(!historyDropdownOpen);
    setQuizDropdownOpen(false);
  };

  const clickedItem = () => {
    setQuizDropdownOpen(false);
    setHistoryDropdownOpen(false);
    setToggle(false);
  };

  return (
    <nav
      className={`px-[3rem] bg-gray-400 text-blue-500 fixed top-0 left-0 right-0 z-50`}
    >
      <div
        className="hidden sm:block md:block absolute right-[2rem] top-[0.5rem]"
        onClick={letToggle}
      >
        {toggle ? (
          <FiX size={30} className="text-white" />
        ) : (
          <FiMenu size={30} className="text-white" />
        )}
      </div>
      <div className="flex justify-between items-center">
        <div className={toggle ? "hidden" : "block mr-8"}>
          <Link to="/" className="italic font-medium text-[1.5rem] text-white">
            quizMe
          </Link>
        </div>
        <ul
          className={
            toggle
              ? "font-semibold text-3xl h-screen w-full pt-[6rem] ease-out px-8 text-white flex flex-col justify-center gap-[2rem] bg-gray-400"
              : "flex items-center text-xl gap-[4rem] py-3 md:hidden sm:hidden"
          }
        >
          <Link to="/" className="" onClick={clickedItem}>
            Home
          </Link>
          <li className="relative group cursor-pointer">
            <p
              className="inline-flex gap-2 items-center"
              onClick={toggleQuizDropdown}
            >
              Quiz <IoIosArrowDown />
            </p>
            <ul
              className={`px-8 py-2 bg-gray-700 shadow-lg z-50 ${
                quizDropdownOpen
                  ? "ml-2 absolute"
                  : "relative hidden w-full max-h-min text-xl"
              }
              `}
            >
              <Link
                to="/political-quiz"
                className="block text-lg border-b-2"
                onClick={clickedItem}
              >
                Politics
              </Link>

              <Link
                to="/africa-quiz"
                className="block py-2 text-lg border-b-2"
                onClick={clickedItem}
              >
                Africa
              </Link>

              <Link
                to="/general-quiz"
                className="block text-lg"
                onClick={clickedItem}
              >
                General
              </Link>
            </ul>
          </li>
          <li className="relative group cursor-pointer">
            <p
              className="inline-flex gap-2 items-center"
              onClick={toggleHistoryDropdown}
            >
              History <IoIosArrowDown />
            </p>
            <ul
              className={`px-8 py-2 bg-gray-700 shadow-lg ${
                historyDropdownOpen
                  ? "ml-2 absolute"
                  : "relative hidden w-full max-h-min"
              }
                
              `}
            >
              <Link
                to="/africa-history"
                className="block pb-2 text-lg border-b-2"
                onClick={clickedItem}
              >
                Africa
              </Link>

              <Link
                to="/nigeria-history"
                className="text-lg"
                onClick={clickedItem}
              >
                Nigeria
              </Link>
            </ul>
          </li>
          <Link to="about-us" className="" onClick={clickedItem}>
            About
          </Link>
          <Link to="/contact-us" className="" onClick={clickedItem}>
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
