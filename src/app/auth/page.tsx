"use client";


import Authentication from "@/components/Auth/Authentication/Authentication";
import "./page.css";

import Default from "@/components/default/Default";


export default function Page() {
  return (
    <>
      <Default current="Login">
      <Authentication />
      </Default>
    </>
  );
}
