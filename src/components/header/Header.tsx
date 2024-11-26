"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import "./Header.css";
import { useRouter } from "next/navigation";
import SideNav from "../sidenav/SideNav";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
interface Props {
  current: string;
}
const navOptions = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Login", href: "/auth" },
];

const Header = ({ current }: Props) => {
  const route = useRouter();
  const { scrollY } = useScroll();
  const anim = useAnimation();
  useMotionValueEvent(scrollY, "change", (latest) => {
    let x = scrollY.get();
    if (x == 0) {
      anim.start("clear");
    } else {
      anim.start("blur");
    }
  });

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  useEffect(() => {
    console.log(isSideNavOpen);
  }, [isSideNavOpen]);

  const sideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };
  return (
    <>
      <motion.header
        variants={{
          clear: { backdropFilter: "blur(0px)" },
          blur: { backdropFilter: "blur(8px)" },
        }}
        initial="clear"
        animate={anim}
        transition={{ duration: 0.128, type: "tween" }}
      >
        <ProgressBar />
        <Image
          src="/logo.svg"
          alt="Vercel Logo"
          width={64}
          height={64}
          priority
          onClick={() => route.push("/")}
        />
        <div className="main-head">
          <motion.nav initial={{ scale: 1 }} whileHover={{ scale: 1.12 }}>
            {navOptions.map((item, index) => {
              return (
                <NavItems
                  key={index}
                  label={item.label}
                  href={item.href}
                  type={`${item.label === current ? "current" : "other"}`}
                />
              );
            })}
          </motion.nav>
        </div>
        <div className="void"></div>
        <div className="btn-side-nav" onClick={sideNav}>
          {isSideNavOpen ? (
            <IoCloseSharp size={32} color="#ddd" />
          ) : (
            <HiOutlineMenuAlt3 size={32} color="#ddd" />
          )}
        </div>
      </motion.header>
      <SideNav state={isSideNavOpen} />
    </>
  );
};

const NavItems = ({
  label,
  href,
  type,
}: {
  label: string;
  href: string;
  type: string;
}) => {
  return (
    <>
      <motion.a
        href={href}
        initial="bedown"
        whileHover={"beup"}
        className={type}
        draggable={false}
      >
        {label.split("").map((item, index) => {
          return (
            <motion.span
              key={index}
              variants={{
                beup: {
                  y: "-100%",
                },
                bedown: {
                  y: "0",
                },
              }}
              transition={{
                duration: 0.128 * (index + 1),
                delay: 0.032,
                type: "spring",
              }}
            >
              <div>{item}</div>
              <div className="purple">{item}</div>
            </motion.span>
          );
        })}
      </motion.a>
    </>
  );
};

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        initial={{ scaleX: 0 }}
        style={{
          scaleX: useSpring(scrollYProgress),
        }}
      ></motion.div>
    </>
  );
};

export default Header;
