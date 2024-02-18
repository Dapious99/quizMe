import React from "react";
import "animate.css";

const Home = () => {
  return (
    <div className="flex justify-center items-center bg-white text-black h-screen">
      <div>
        <p className="animate__animated animate__flip animate__infinite animate__slower font-semibold lg:font-bold text-2xl py-6 lg:text-[3rem] relative left-80 bg-gradient-to-r from-blue-400 via-red-500 to-blue-400 inline-block text-transparent bg-clip-text">
          quizMe
        </p>
        <p className="lg:text-[2rem] text-2xl text-center opacity-70">
          Welcome to{" "}
          <span className="italic text-blue-700 text-[2rem] lg:text-[2.5rem]">
            quizMe
          </span>
          , your friendly Quiz and History platform.
        </p>
      </div>
    </div>
  );
};

export default Home;
