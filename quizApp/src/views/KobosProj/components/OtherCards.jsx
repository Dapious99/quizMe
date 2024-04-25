import React from "react";
import { Link } from "react-router-dom";
const OtherCards = ({ image, morelink, heading, content }) => {
  return (
    <div className="rounded-xl border-[3px] border-black w-[24.5rem]">
      <div className="border-b-[6px] border-black">
        <img src={image} className="w-full rounded-t-lg" />
      </div>
      <div className="p-2 flex flex-col items-center">
        <p className="h-5 text-center text-sm font-bold">{heading}</p>
        <p className="text-center text-xl font-medium pt-8 h-36">{content}</p>
        <Link
          to={morelink}
          className="mt-2 bg-[#f3f6f5] text-[#3d7466] hover:bg-[#3d7466] hover:text-white w-full text-center py-[0.8rem] rounded-lg"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default OtherCards;
