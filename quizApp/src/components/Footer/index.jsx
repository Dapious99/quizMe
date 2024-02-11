import React from "react";
import { currentYear } from "../../utils";

const Index = () => {
  return (
    <div className="border-t-2 bg-gray-400">
      <p className="text-sm text-center p-4">
        &#169;Kodewarlock {currentYear}. All rights reserved
      </p>
    </div>
  );
};

export default Index;
