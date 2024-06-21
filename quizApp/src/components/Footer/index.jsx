import React from "react";
import { currentYear } from "../../utils";

const Index = () => {
  return (
    <div className="border-t-2 bg-blue-900 text-white">
      <p className="text-sm text-center p-4">
        &#169; Kodewarlock {currentYear}. All rights reserved
      </p>
    </div>
  );
};

export default Index;
