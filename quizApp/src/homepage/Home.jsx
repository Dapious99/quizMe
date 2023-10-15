import React from "react";
import "animate.css";

const Home = () => {
  return (
    <div className="flex justify-center items-center bg-gray-500 h-screen">
      <div>
        <p className="animate__animated animate__flip animate__repeat-3 animate__slower font-semibold text-center py-4 text-[3rem]">
          quizMe
        </p>
        <p className=" text-[2rem]">
          Welcome to <span className="italic text-blue-700 text-[2.5rem]">quizMe</span>,
          your friendly Quiz app.
        </p>
      </div>
    </div>
  );
};

export default Home;
