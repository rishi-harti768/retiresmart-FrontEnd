"use client";
import React, { use } from "react";
import "./page.css";
import { useRouter } from "next/navigation";

const NewAnalysis = () => {
  const router = useRouter();

  const handleNewAnalysis = () => {
    router.push("/beta/new-plan");
  };
  return (
    <>
      <button
        className="button new-analysis-button"
        onClick={handleNewAnalysis}
      >
        Start New Analysis
      </button>
    </>
  );
};

export default NewAnalysis;
