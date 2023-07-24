import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import { ToastContainer } from "react-toastify";
import {Home} from './pages/Home';
import SecureRoute from "./Routes/SecureRoute";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
      
   
        <Route path="/signin" element={<Signin />} />

       <Route path="/" element={<SecureRoute/>}>
        <Route path="/home" element={<Home/>} />
       </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
