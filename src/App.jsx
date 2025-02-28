import Navbar from "./assets/components/navbar";
import SignIn from "./assets/components/SignIn";
import './App.css'
import AIorNot from "./assets/components/AIorNot";
function App() {
  return (
    <>
      {/* use for nav bar in siginPage */}
      <Navbar /> {/* fixed */}
      <AIorNot/> {/* fixed */}
      <SignIn/>  {/* changing */}
    </>
  );
}

export default App;
