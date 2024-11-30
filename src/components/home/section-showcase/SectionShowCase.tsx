import React, { useState } from "react";

import "./style.css";
import AIchip from "./AIchip";

const SectionShowCase = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  return (
    <>
      <section className="showcase">
        <div className="portfolio" onMouseEnter={() => setShowPortfolio(true)}>
          <div className="content">
            <h5>Instant Portfolio Analysis</h5>
            <p style={{ width: "fit-content" }}>
              Quick retirement readiness assessment using AI-powered analytics,
              no complex financial knowledge required!
            </p>
            <div className="anim">
              <AIchip state={showPortfolio} />
            </div>
          </div>
        </div>
        <div className="rebalence"></div>
        <div className="optimize"></div>
        <div className="feature"></div>
      </section>
    </>
  );
};

export default SectionShowCase;
