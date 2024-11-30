"use client";
import AIchip from "@/components/home/section-showcase/AIchip";
import "./page.css";

import Default from "@/components/default/Default";
import { useState } from "react";

export default function Page() {
  const [state, setState] = useState(false);
  return (
    <>
      <Default current="About">
        <h1>this is about page</h1>
        <div
          style={{ width: "400px", height: "400px", backgroundColor: "gray" }}
          onMouseOver={() => setState(true)}
        >
          <AIchip state={state} />
        </div>
      </Default>
    </>
  );
}
