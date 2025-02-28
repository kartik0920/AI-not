import Navbar from "/src/assets/components/navbar";
import AIorNot from "/src/assets/components/AIorNot";
import SignIn from "/src/assets/components/SignIn";

export default function SignInPage({ setToken }) {
  return (
    <>
      {" "}
      {/* use for nav bar in siginPage */}
      <Navbar /> {/* fixed */}
      <AIorNot /> {/* fixed */}
      <SignIn setToken={setToken} /> {/* changing */}
    </>
  );
}
