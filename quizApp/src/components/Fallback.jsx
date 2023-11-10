import React from "react";

const Fallback = () => {
  return (
    <div className="flex flex-col items-center bg-gray-400">
      <h1 className="text-5xl bg-red-800">Error 404</h1>
      <p className="text-lg bg-neutral-600">
        The page or resource you are requesting is not available.
      </p>
    </div>
  );
};

export default Fallback;
