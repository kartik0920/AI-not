import Navbar from "/src/assets/components/navbar";
import AIorNot from "/src/assets/components/AIorNot";
import SignUp from "/src/assets/components/Signupbox";

export default function SignUpPage() {
  return (
    <>
      {" "}
      {/* use for nav bar in siginPage */}
      <Navbar /> {/* fixed */}
      <AIorNot /> {/* fixed */}
      <SignUp /> {/* changing */}
    </>
  );
}
