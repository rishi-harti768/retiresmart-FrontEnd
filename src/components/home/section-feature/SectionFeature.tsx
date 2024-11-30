"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import "./style.css";

const SectionFeature = () => {
  const refTL = useRef(null);
  const refTR = useRef(null);
  const refBL = useRef(null);
  const refBR = useRef(null);
  const viewrule = { once: true };
  const isInViewTL = useInView(refTL, viewrule);
  const isInViewTR = useInView(refTL, viewrule);
  const isInViewBL = useInView(refTL, viewrule);
  const isInViewBR = useInView(refTL, viewrule);
  return (
    <>
      <section className="feature">
        <motion.h2
          initial={{ backgroundSize: "100%" }}
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          dragElastic={0.12}
          whileHover={{ scale: 1.28 }}
          whileDrag={{ scale: 2.56 }}
          whileInView={{
            backgroundSize: "150%",
          }}
        >
          Features
        </motion.h2>
        <div className="feature-list">
          <List
            className="top-left"
            img="/icons/piggy-bank.svg"
            title="Smart Savings"
            desc="Building a strong financial foundation ensures a stress-free
                retirement."
            pos="-12%"
          />
          <List
            className="top-right"
            img="/icons/handshake.svg"
            title="Secure Future"
            desc="Planning ahead is key to achieving lifelong financial
                independence."
            pos="12%"
          />
          <List
            className="bottom-left"
            img="/icons/line-chart.svg"
            title="Wealth Growth"
            desc="Investing wisely today ensures prosperity and security for
                tomorrow."
            pos="-12%"
          />
          <List
            className="bottom-right"
            img="/icons/money-hand.svg"
            title="Financial Wellness"
            desc="A balanced approach to savings and spending promotes a
                fulfilling retirement lifestyle."
            pos="12%"
          />
        </div>
      </section>
    </>
  );
};

const List = ({
  className,
  pos,
  img,
  title,
  desc,
}: {
  className: string;
  pos: string;
  img: string;
  title: string;
  desc: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10px" });
  const anim = useAnimation();
  useEffect(() => {
    if (isInView) {
      anim.start("show");
    }
  }, [isInView, anim]);
  return (
    <>
      <motion.div
        className={`feature-item${" " + className}`}
        variants={{
          hide: { x: pos },
          show: { x: 0 },
        }}
        initial="hide"
        whileInView="show"
        transition={{ delay: 0.064, type: "spring" }}
        ref={ref}
      >
        <Image
          src={img}
          alt="icon"
          width={64}
          height={64}
          priority
          draggable={false}
        />
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </motion.div>
    </>
  );
};

export default SectionFeature;
