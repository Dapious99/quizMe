import React from "react";
import { Link } from "react-router-dom";

const Fallback = () => {
  return (
    <div className="flex flex-col items-center bg-gray-200 h-screen justify-center">
      <h1 className="text-5xl text-red-800">Error 404</h1>
      <p className="text-xl text-neutral-600">
        The page or resource you are requesting is not available or may have
        moved completely, check and confirm the url.
      </p>
      <Link to="/" className="text-blue-400">
        Go back to home
      </Link>
    </div>
  );
};

export default Fallback;
