"use client";
import Authentication from "@/components/auth/authenticator";
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
