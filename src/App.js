import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import StuntedPage from "./components/Topics/StuntedPage";
import Maternity from "./components/Topics/Maternity";
import MentalHealth from "./components/Topics/MentalHealth";
import GeneralUse from "./components/Topics/GeneralUse";
import TopicPage from "./components/Topics/TopicPage";
  
function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Navbar />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<TopicPage/>}></Route>
          <Route path="/StuntedPage" element={<StuntedPage/>}></Route>
          <Route path="/Maternity" element={<Maternity/>}></Route>
          <Route path="/MentalHealth" element={<MentalHealth/>}></Route>
          <Route path="/GeneralUse" element={<GeneralUse/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}
  
export default App;