import React from "react";
import { cardRendering, pressDetails } from "../../utils";
import Press from "./components/Press";
import OtherCards from "./components/OtherCards";
import Hero from "./components/Hero";
import Select from "./components/Select";

const KoboskyBlog = () => {
  return (
    <div>
      <section className="px-24 md:px-2 sm:px-2 xs:px-1 mt-20 py-5 mb-5 bg-[#0c513f]">
        <Hero />
      </section>
      <section className="px-24 md:px-2 sm:px-2 xs:px-1">
        <div className="grid grid-cols-3 gap-y-5 md:flex md:flex-wrap md:gap-2 sm:flex sm:flex-col sm:gap-4">
          {cardRendering.map((card, index) => (
            <OtherCards
              key={index}
              image={card.image}
              morelink={card.morelink}
              heading={card.heading}
              content={card.content}
            />
          ))}
        </div>
      </section>
      <section className="px-24 md:px-2 sm:px-2 xs:px-1 py-20">
        <h4 className="text-6xl pb-4 font-black border-b border-gray-800">
          Press
        </h4>
        {pressDetails.map((pressDetail, index) => (
          <Press
            key={index}
            content={pressDetail.content}
            image={pressDetail.image}
            link={pressDetail.link}
          />
        ))}
      </section>
    </div>
  );
};

export default KoboskyBlog;
