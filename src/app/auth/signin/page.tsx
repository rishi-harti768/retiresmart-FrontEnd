import Default from "@/components/default/Default";
import Authentication from "@/components/auth/authenticator";

export default function Page() {
  return (
    <>
      <Default current="Sign Up">
        <Authentication />
      </Default>
    </>
  );
}
