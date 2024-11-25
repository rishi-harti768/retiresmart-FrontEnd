import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "./style.css";

const SectionFeature = () => {
  return (
    <>
      <section className="feature">
        <motion.div
          className="feature-item top-left"
          initial={{ x: "-12%" }}
          whileInView={{ x: "0" }}
          transition={{ delay: 0.064, type: "spring" }}
        >
          <Image
            src="/icons/piggy-bank.svg"
            alt="icon"
            width={64}
            height={64}
            priority
          />
          <div>
            <h3>Smart Savings</h3>
            <p>
              Building a strong financial foundation ensures a stress-free
              retirement.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="feature-item top-right"
          initial={{ x: "12%" }}
          whileInView={{ x: "0" }}
          transition={{ delay: 0.064, type: "spring" }}
        >
          <Image
            src="/icons/handshake.svg"
            alt="icon"
            width={64}
            height={64}
            priority
          />
          <div>
            <h3>Secure Future</h3>
            <p>
              Planning ahead is key to achieving lifelong financial
              independence.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="feature-item bottom-left"
          initial={{ x: "-12%" }}
          whileInView={{ x: "0" }}
          transition={{ delay: 0.064, type: "spring" }}
        >
          <Image
            src="/icons/line-chart.svg"
            alt="icon"
            width={64}
            height={64}
            priority
          />
          <div>
            <h3>Wealth Growth</h3>
            <p>
              Investing wisely today ensures prosperity and security for
              tomorrow.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="feature-item bottom-right"
          initial={{ x: "12%" }}
          whileInView={{ x: "0" }}
          transition={{ delay: 0.064, type: "spring" }}
        >
          <Image
            src="/icons/money-hand.svg"
            alt="Vercel Logo"
            width={64}
            height={64}
          />
          <div>
            <h3>Financial Wellness</h3>
            <p>
              A balanced approach to savings and spending promotes a fulfilling
              retirement lifestyle.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default SectionFeature;
