"use client";
import Default from "../components/default/Default";

import "./page.css";
import SectionFeature from "@/components/home/section-feature/SectionFeature";
import SectionIntro from "@/components/home/section-intro/SectionIntro";
import { use } from "react";
import Header from "../components/header/Header";
import SectionShowCase from "@/components/home/section-showcase/SectionShowCase";

export default function Home() {
  return (
    <>
      <Default current="Home">
        <SectionIntro />
        <SectionFeature />
        <SectionShowCase />
      </Default>
    </>
  );
}
