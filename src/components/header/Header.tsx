"use client";
import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import "./Header.css";

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
  return (
    <>
      <header>
        <div className="progress-bar"></div>

        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={64}
          height={64}
          priority
        />

        <div className="main-head">
          <nav>
            {/* {navOptions.map((item, index) => {
              return (
                <div
                  className={`navopt${item === current ? " current" : ""}`}
                  key={index}
                >
                  {item}
                </div>
              );
            })} */}
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
          </nav>
        </div>
      </header>
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
              transition={{ duration: 0.128 * (index + 1), type: "spring" }}
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

export default Header;
