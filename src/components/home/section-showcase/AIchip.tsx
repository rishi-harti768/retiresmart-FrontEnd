"use client";
import React, { useEffect, useState } from "react";
import "./svg.css";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";

const AIchip = ({ state }: { state: boolean }) => {
  const chipAnim = useAnimation();
  const [wave, setWave] = useState(false);
  useEffect(() => {
    if (state) {
      chipAnim.start("on");
      setTimeout(() => {
        setWave(true);
        console.log("change", wave);
      }, 1024);
    }
  }, [state]);
  const chipVariants = {
    off: {
      fill: "#525252",
    },
    on: {
      fill: "#673DE5",
    },
  };
  const textVariants = {
    off: {
      fill: "#0000",
    },
    on: {
      fill: "#ddd",
    },
  };
  const busCircleVariants = {
    off: {
      stroke: "#0000",
    },
    on: {
      stroke: "#00B4D8",
    },
  };
  const busTrackVariants = {
    off: {
      pathLength: 0,
    },
    on: {
      pathLength: 1,
    },
  };
  return (
    <>
      <svg
        className="anim"
        width="642"
        height="574"
        viewBox="0 0 642 574"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_0_1)">
          <motion.rect
            x="256.51"
            y="189.504"
            width="129.131"
            height="128.451"
            rx="24"
            fill="#673DE5"
            variants={chipVariants}
            initial="off"
            animate={chipAnim}
            transition={{ duration: 0.768 }}
          />
        </g>
        <motion.path
          d="M301.385 276.504H287.749L303.113 229.958H320.385L335.749 276.504H322.113L311.931 242.777H311.567L301.385 276.504ZM298.84 258.14H324.476V267.595H298.84V258.14ZM352.868 229.958V276.504H340.232V229.958H352.868Z"
          fill="#ddd"
          variants={textVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.024 }}
        />
        {/* this */}
        <motion.circle
          cx="321.086"
          cy="137.366"
          r="7.07591"
          transform="rotate(-90 321.086 137.366)"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        <motion.circle
          cx="334.943"
          cy="156.834"
          r="7.07591"
          transform="rotate(-90 334.943 156.834)"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        {/* this */}
        <motion.circle
          cx="367.781"
          cy="139.104"
          r="7.07591"
          transform="rotate(-90 367.781 139.104)"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        <motion.circle
          cx="307.211"
          cy="165.257"
          r="7.07591"
          transform="rotate(-90 307.211 165.257)"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        <motion.path
          d="M307.211 185.167L307.211 172.332"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busTrackVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 0.768, duration: 1.024 }}
        />
        <motion.path
          d="M284.935 185.13L284.935 166.876L274.37 156.312L274.37 146.179"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busTrackVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 0.768, duration: 1.024 }}
        />
        <motion.path
          d="M357.418 185.098L357.418 166.486L367.781 156.123L367.781 146.057M321.256 185.12L321.256 144.442"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busTrackVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 0.768, duration: 1.024 }}
        />
        <motion.path
          d="M334.942 185.315L334.942 163.91"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busTrackVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 0.768, duration: 1.024 }}
        />
        <motion.circle
          cx="274.37"
          cy="139.104"
          r="7.07591"
          transform="rotate(-90 274.37 139.104)"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        <motion.circle
          cx="204.771"
          cy="253.709"
          r="7.07591"
          transform="rotate(180 204.771 253.709)"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        <motion.circle
          cx="224.24"
          cy="239.853"
          r="7.07591"
          transform="rotate(180 224.24 239.853)"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        <motion.circle
          cx="206.509"
          cy="207.014"
          r="7.07591"
          transform="rotate(180 206.509 207.014)"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        <motion.circle
          cx="232.662"
          cy="267.585"
          r="7.07591"
          transform="rotate(180 232.662 267.585)"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        <motion.path
          d="M252.572 267.584L239.738 267.584"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busTrackVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 0.768, duration: 1.024 }}
        />
        <motion.path
          d="M252.536 289.86L234.282 289.86L223.717 300.425L213.585 300.425"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busTrackVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 0.768, duration: 1.024 }}
        />
        <motion.path
          d="M252.503 217.377L233.891 217.377L223.528 207.014L213.463 207.014M252.526 253.539L211.847 253.539"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busTrackVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 0.768, duration: 1.024 }}
        />
        <motion.path
          d="M252.72 239.853L231.315 239.853"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busTrackVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 0.768, duration: 1.024 }}
        />
        <motion.circle
          cx="206.509"
          cy="300.425"
          r="7.07591"
          transform="rotate(180 206.509 300.425)"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        <motion.circle
          cx="437.662"
          cy="253.73"
          r="7.07591"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        <motion.circle
          cx="418.194"
          cy="267.587"
          r="7.07591"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        <motion.circle
          cx="435.925"
          cy="300.425"
          r="7.07591"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        <motion.circle
          cx="409.772"
          cy="239.855"
          r="7.07591"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        <motion.path
          d="M389.861 239.855H402.696"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busTrackVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 0.768, duration: 1.024 }}
        />
        <motion.path
          d="M389.897 217.579H408.151L418.716 207.014H428.848"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busTrackVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 0.768, duration: 1.024 }}
        />
        <motion.path
          d="M389.93 290.062L408.542 290.062L418.905 300.425H428.971M389.908 253.9H430.586"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busTrackVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 0.768, duration: 1.024 }}
        />
        <motion.path
          d="M389.713 267.586H411.118"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busTrackVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 0.768, duration: 1.024 }}
        />
        <motion.circle
          cx="435.925"
          cy="207.014"
          r="7.07591"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        <motion.circle
          cx="321.246"
          cy="370.434"
          r="7.07591"
          transform="rotate(90 321.246 370.434)"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        <motion.circle
          cx="307.389"
          cy="350.966"
          r="7.07591"
          transform="rotate(90 307.389 350.966)"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        <motion.circle
          cx="274.551"
          cy="368.696"
          r="7.07591"
          transform="rotate(90 274.551 368.696)"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        <motion.circle
          cx="335.121"
          cy="342.543"
          r="7.07591"
          transform="rotate(90 335.121 342.543)"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        <motion.path
          d="M335.122 322.633L335.122 335.468"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busTrackVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 0.768, duration: 1.024 }}
        />
        <motion.path
          d="M357.397 322.669L357.397 340.923L367.962 351.488L367.962 361.62"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busTrackVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 0.768, duration: 1.024 }}
        />
        <motion.path
          d="M284.914 322.702L284.914 341.314L274.551 351.677L274.551 361.743M321.076 322.68L321.076 363.358"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busTrackVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 0.768, duration: 1.024 }}
        />
        <motion.path
          d="M307.39 322.485L307.39 343.89"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busTrackVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 0.768, duration: 1.024 }}
        />
        <motion.circle
          cx="367.962"
          cy="368.696"
          r="7.07591"
          transform="rotate(90 367.962 368.696)"
          stroke="#00B4D8"
          strokeWidth="4"
          variants={busCircleVariants}
          initial="off"
          animate={chipAnim}
          transition={{ delay: 1.2 }}
        />
        <defs>
          {wave ? (
            <filter
              id="filter0_d_0_1"
              x="0.51001"
              y="-66.4961"
              width="641.132"
              height="640.451"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <motion.feMorphology
                radius={128}
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_0_1"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="64" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.403922 0 0 0 0 0.239216 0 0 0 0 0.898039 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
          ) : null}
        </defs>
      </svg>
    </>
  );
};

export default AIchip;
