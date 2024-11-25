"use client";
import Default from "@/components/default/Default";
import SetionIntro from "../components/home/section-intro/SetionIntro"

import "./page.css";

export default function Home() {
  return (
    <>
      <Default current="Home">
        <SetionIntro />
      </Default>
    </>
  );
}
