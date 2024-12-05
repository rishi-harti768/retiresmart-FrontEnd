"use client";
import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const navOptions = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Login", href: "/auth" },
  { label: "Try Beta", href: "/beta" },
];

const SideNav = ({ state }: { state: boolean }) => {
  const variants = {
    hide: {
      scale: 0,
      top: 0,
      borderRadius: "25svw",
    },
    show: {
      scale: 1,
      top: "var(--uxlarge)",
      borderRadius: "0%",
    },
  };
  return (
    <>
      <motion.nav
        className="side-nav"
        variants={variants}
        initial="hide"
        animate={state ? "show" : "hide"}
      >
        {navOptions.map((item, index) => {
          return (
            <motion.a
              href={item.href}
              key={index}
              className="navopt"
              variants={variants}
              initial="hide"
              animate={state ? "show" : "hide"}
              transition={{ delay: index * 0.1, type: "spring", duration: 0.5 }}
            >
              {item.label}
            </motion.a>
          );
        })}
      </motion.nav>
    </>
  );
};

export default SideNav;
