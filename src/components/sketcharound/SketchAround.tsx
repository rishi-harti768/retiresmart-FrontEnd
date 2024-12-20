import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import "./sketcharound.css";

const SketchAround = () => {
  const ref = useRef(null);
  return (
    <>
      <div className="sketcharound" ref={ref}>
        <svg
          width="1606"
          height="541"
          viewBox="0 0 1606 541"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0.92749 5.00537C219.876 19.737 453.944 141.497 455.712 284.996C457.48 428.496 395.059 513.067 246.912 516.996C98.7664 520.925 66.7732 288.626 187.624 202.508C308.474 116.389 582.449 118.053 741.845 176.73C901.241 235.407 842.965 497.546 1002.2 532.463C1161.44 567.379 1120.89 336.438 1329.58 297.885C1538.27 259.333 1600.99 429.043 1600.99 429.043"
            stroke="#673DE5"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
          />
        </svg>
      </div>
    </>
  );
};

export default SketchAround;
