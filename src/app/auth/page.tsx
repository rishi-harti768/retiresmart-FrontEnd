"use client";
import SignIn from "@/components/Auth/SignIn/SignIn";
import "./page.css";

import Default from "@/components/default/Default";

export default function Page() {
  return (
    <>
      <Default current="Login">
      <SignIn />
      </Default>
    </>
  );
}
