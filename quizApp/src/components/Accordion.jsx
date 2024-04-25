import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const Index = ({ title, content, isOpen, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex gap-4 overflow-scroll">
      <div className="mb-2 ">
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onToggle}
          className={`w-full px-4 sm:px-2 xs:px-2 py-3 font-FiraSans text-start font-bold sm:font-medium xs:font-medium flex justify-between items-center bg-[#f7f7f7] ${
            isHovered ? "text-blue-800" : "text-black"
          }`}
        >
          <h6 className="text-xl">{title}</h6>
          {isOpen ? <FiMinus size={24} /> : <FiPlus size={24} />}
        </button>
      </div>
      <div className="bg-yellow-300">
        {isOpen && (
          <div className="inline-flex flex-col text-base text-black px-4 font-FiraSans font-medium gap-2">
            Ans.
            <p className="block">{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
