"use client";
import { ReactNode } from "react";
import "./default.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

type Props = {
  current: string;
  children?: ReactNode;
};

const Default = ({ current, children }: Props) => {
  return (
    <>
      <main>
        <Header current={current} />
        <article>{children}</article>
        <Footer />
      </main>
    </>
  );
};

export default Default;
