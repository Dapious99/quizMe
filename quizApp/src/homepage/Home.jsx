import React from "react";
import "animate.css";

const Home = () => {
  return (
    <div className="flex justify-center items-center bg-gray-500 h-screen">
      <div>
        <p className="animate__animated animate__flip animate__repeat-3 animate__slower font-semibold sm:font-medium md:font-medium text-2xl text-center py-4 lg:text-[3rem]">
          quizMe
        </p>
        <p className="lg:text-[2rem] text-2xl">
          Welcome to{" "}
          <span className="italic text-blue-700 text-[2rem] lg:text-[2.5rem]">
            quizMe
          </span>
          , your friendly Quiz app.
        </p>
      </div>
    </div>
  );
};

export default Home;
