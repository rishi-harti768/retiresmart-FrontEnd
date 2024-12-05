"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./page.css";

const ViewAnalysis = ({ id }: { id: number }) => {
  const router = useRouter();

  const handleViewAnalysis = (id: number) => {
    router.push(`/beta/view-analysis/${id}`);
  };
  return (
    <>
      <button className="button" onClick={() => handleViewAnalysis(id)}>
        View Analysis
      </button>
    </>
  );
};

export default ViewAnalysis;
