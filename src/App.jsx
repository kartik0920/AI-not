import Navbar from "./assets/components/navbar";
import SigninBox from "./assets/components/SignInBox";

function App() {
  return (
    <>
      {/* use for nav bar in siginPage */}
      <Navbar />
      <h1 className="title-signin">AI or NOT</h1>
      <SigninBox />
    </>
  );
}

export default App;
