"use client";
import React, { useRef } from "react";
import "./style.css";
import {
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  motion,
  useAnimation,
} from "motion/react";

const SectionIntro = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 0.64, 1], [1, 1, 0.8]);
  const rad = useTransform(scrollYProgress, [0, 0.64, 1], [0, 0, 64]);
  const border = useTransform(
    scrollYProgress,
    [0, 0.64, 1],
    ["0px", "0px", "2px"]
  );

  const len = useTransform(
    useSpring(scrollYProgress),
    [0, 0.64, 1],
    [0, 1, 1.1]
  );
  const vis = useTransform(
    useSpring(scrollYProgress),
    [0, 0.64, 0.65, 1],
    [0, 0, 1, 1]
  );

  return (
    <>
      <section className="intro" ref={ref}>
        <div className="background">
          <div className="frame">
            <motion.div
              className="motion"
              initial={{ scale: 1, borderRadius: 0, borderWidth: 0 }}
              style={{ scale: scale, borderRadius: rad, borderWidth: border }}
            >
              <svg
                width="488"
                height="277"
                viewBox="0 0 488 277"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M2.84521 277L126.362 153.484L180.832 207.954L293.607 95.1775L343.474 145.044L463.155 25.3638"
                  stroke="#3BA53D"
                  strokeWidth="8"
                  style={{ pathLength: len }}
                  transition={{ type: "spring", damping: 64, stiffness: 2048 }}
                />
                <motion.path
                  d="M475.57 12.9485L467.699 42.3234L446.195 20.8195L475.57 12.9485Z"
                  fill="#3BA53D"
                  style={{ opacity: vis }}
                />
              </svg>
            </motion.div>
          </div>
        </div>
        <div className="foreground">
          <motion.div className="frame">
            <motion.div
              className="wave-text"
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              initial={{ opacity: 0, y: 32 }}
              whileDrag={{ scale: 2.56 }}
              whileHover={{ scale: 1.1 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              /* transition={{
                type: "spring",
                delay: 0.612,
                duration: 0.512,
                damping: 12,
                stiffness: 512,
              }} */
            >
              ~ Welcome to <span>RetirSmart</span>
            </motion.div>
            <motion.h1
              className="main-title"
              initial={{ opacity: 0, y: "100%", backgroundPositionY: "0%" }}
              animate={{
                opacity: 1,
                y: "0%",
                backgroundPositionY: "100%",
              }}
              transition={{ type: "spring", duration: 1.442 }}
            >
              Plan Smart, Live Smart
            </motion.h1>
            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 32 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                delay: 0.712,
                duration: 0.512,
                damping: 12,
                stiffness: 512,
              }}
            >
              Securing Your Future, One Step at a Time
            </motion.p>
            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 32 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                delay: 0.812,
                duration: 0.512,
                damping: 12,
                stiffness: 512,
              }}
            >
              Empowering You to Achieve Financial Freedom
            </motion.p>
            <motion.button
              className="cta-button"
              initial={{ scale: 0 }}
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={0.128}
              animate={{
                scale: 1,
              }}
              whileDrag={{ scale: 1.28 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                duration: 0.512,
                damping: 16,
                stiffness: 512,
              }}
              onClick={() => {
                alert("clicked");
              }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const Reveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default SectionIntro;
