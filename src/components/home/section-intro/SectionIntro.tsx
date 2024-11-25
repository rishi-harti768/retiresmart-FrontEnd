import React, { use, useRef } from "react";
import "./style.css";
import {
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  motion,
} from "motion/react";

const SectionIntro = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rad = useTransform(scrollYProgress, [0, 1], [0, 64]);
  return (
    <>
      <section className="intro" ref={ref}>
        <div className="background">
          <motion.div
            className="motion"
            initial={{ scale: 1, borderRadius: 0 }}
            style={{ scale: scale, borderRadius: rad }}
          ></motion.div>
        </div>
      </section>
    </>
  );
};

export default SectionIntro;
