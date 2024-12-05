import React from "react";
import "./page.css";
import Default from "@/components/default/Default";
import InputForm from "./InputForm";

const backend: any = process.env.BACKEND_URL;

const Page = () => {
  return (
    <>
      <Default current="beta-input">
        <InputForm backend={backend}></InputForm>
      </Default>
    </>
  );
};

export default Page;
