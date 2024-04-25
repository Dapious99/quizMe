import React from "react";
import { scrollingCard } from "../../../utils";
import HeroCards from "./HeroCards";

const Hero = () => {
  return (
    <div className="bg-">
      <div>Word div</div>
      <div className="overflow-auto h-">
        <div className="overflow-scrolling flex flex-col gap-4">
          {scrollingCard.map((card, index) => (
            <HeroCards
              key={index}
              image={card.image}
              morelink={card.morelink}
              heading={card.heading}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
