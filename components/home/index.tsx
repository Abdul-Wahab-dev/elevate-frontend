import React from "react";
import MarketNews from "./marketNews";
import OpenPositions from "./openPositions";
const LandingPage: React.FC = () => {
  return (
    <div>
      <OpenPositions />
      <MarketNews />
    </div>
  );
};

export default LandingPage;
