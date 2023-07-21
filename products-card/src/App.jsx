import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />

        <Route path="/signin" element={<Signin />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
