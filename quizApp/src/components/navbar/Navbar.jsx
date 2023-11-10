import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [quizDropdownOpen, setQuizDropdownOpen] = useState(false);
  const [historyDropdownOpen, setHistoryDropdownOpen] = useState(false);

  const letToggle = () => {
    setToggle(!toggle);
    setQuizDropdownOpen(false); // Close Quiz dropdown when main dropdown is toggled
    setHistoryDropdownOpen(false); // Close History dropdown when main dropdown is toggled
  };

  const toggleQuizDropdown = () => {
    setQuizDropdownOpen(!quizDropdownOpen);
  };

  const toggleHistoryDropdown = () => {
    setHistoryDropdownOpen(!historyDropdownOpen);
  };

  const clickedItem = () => {
    setQuizDropdownOpen(false); // Close Quiz dropdown when a parent menu item is clicked
    setHistoryDropdownOpen(false); // Close History dropdown when a parent menu item is clicked
  };

  return (
    <nav className="px-[3rem] bg-gray-400">
      <div
        className="hidden sm:block md:block absolute md:right-[6rem] right-[2rem] top-[rem]"
        onClick={letToggle}
      >
        {toggle ? (
          <FiX size={30} className="text-black" />
        ) : (
          <FiMenu size={30} className="text-black" />
        )}
      </div>
      <div className="flex justify-between items-center">
        <div className={toggle ? "hidden" : "block mr-8"}>
          <Link to="/" className="italic font-medium text-[1.5rem]">
            quizMe
          </Link>
        </div>

        <ul
          className={
            toggle
              ? "h-screen w-full pt-[6rem] ease-out px-8 text-black flex flex-col gap-[2rem]"
              : "flex gap-[4rem] py-3 md:hidden sm:hidden"
          }
        >
          <Link to="/" className="" onClick={clickedItem}>
            Home
          </Link>
          <li className="relative group">
            <p className="" onClick={toggleQuizDropdown}>
              Quiz
            </p>
            <ul
              className={
                quizDropdownOpen
                  ? "ml-2 absolute sm:ml-12 p-2"
                  : "ml-2 absolute hidden p-2"
              }
            >
              <Link
                to="/political-quiz"
                className="block py-2"
                onClick={clickedItem}
              >
                Politics
              </Link>

              <Link
                to="/africa-quiz"
                className="block py-2"
                onClick={clickedItem}
              >
                Africa
              </Link>

              <Link
                to="/random-quiz"
                className="block py-2"
                onClick={clickedItem}
              >
                Random
              </Link>
            </ul>
          </li>
          <li className="relative group">
            <p className="" onClick={toggleHistoryDropdown}>
              History
            </p>
            <ul
              className={
                historyDropdownOpen
                  ? "ml-2 absolute sm:ml-14 p-2"
                  : "ml-2 absolute hidden p-2"
              }
            >
              <Link to="" className="block py-2" onClick={clickedItem}>
                Africa
              </Link>

              <Link to="" className="block py-2" onClick={clickedItem}>
                Nigeria
              </Link>
            </ul>
          </li>
          <Link to="/about" className="" onClick={clickedItem}>
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
