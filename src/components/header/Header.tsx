import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="progress-bar"></div>
        <div className="main-head">
          <Image src="/vercel.svg" alt="Vercel Logo" width={64} height={64} />
          <nav>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
            <div>Login</div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
