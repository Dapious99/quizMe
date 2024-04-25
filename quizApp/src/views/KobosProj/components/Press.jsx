import React from "react";
import arrowlike from "../../../assets/article.svg";

const Press = ({ content, image, link }) => {
  return (
    <div className="flex justify-between items-center py-8 border-b border-gray-800">
      <p className="text-2xl md:text-lg sm:text-base font-medium w-[42.3rem] md:w-[30rem] sm:w-[13rem]">
        {content}
      </p>
      <div className="block sm:hidden md:hidden w-10 h-10">
        <img src={image} />
      </div>
      <a href={link} target="_blank" className="flex gap-2 items-center">
        <p className="font-bold md:font-semibold sm:font-semibold text-sm hover:underline">
          VIEW ARTICLE
        </p>
        <img src={arrowlike} className="w-4 h-4" />
      </a>
    </div>
  );
};

export default Press;
