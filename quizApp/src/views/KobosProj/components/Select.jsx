import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  const categories = ["All", "News", "Riders"];

  return (
    <div className="w-[27rem] items-center">
      <div
        className="flex justify-between bg-black rounded p-4 cursor-pointer"
        onClick={toggleDropdown}
      >
        <p className="text-white">Categories: {selectedCategory}</p>
        <p className="text-white inline-flex font-bold text-sm items-center gap-1">
          SELECT <IoIosArrowDown size={18} className="" />
        </p>
      </div>
      {isOpen && (
        <div className="bg-black text-white mt-2 rounded p-4 flex flex-col gap-2">
          {categories.map((category, index) => (
            <div key={index} className="flex gap-3 items-center">
              <input
                type="radio"
                name="categories"
                defaultChecked={selectedCategory === category}
                className="appearance-none w-2 h-2 rounded-full border checked:bg-[#fec501] border-[#fec501]"
                onChange={() => handleCategorySelect(category)}
              />
              <label>Categories: {category}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
