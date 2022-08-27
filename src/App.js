import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
  
function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
            {/* <img src = "volunteer1.jpg" alt="Volunteer"></img> */}
          </Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contactus" element={<ContactUs/>}></Route>

        </Routes>
      </BrowserRouter>
      
    </>
  );
}
  
export default App;