"use client";
import Default from "@/components/default/Default";

import "./page.css";
import SectionFeature from "@/components/home/section-feature/SectionFeature";
import SectionIntro from "@/components/home/section-intro/SectionIntro";
import { use } from "react";

export default function Home() {
  return (
    <>
      <Default current="Home">
        <SectionIntro />
        <SectionFeature />
      </Default>
    </>
  );
}
