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
import HealthRecord from "./components/HealthRecord/HealthRecord";
import HelpDesk from "./components/HelpDesk/HelpDesk"
import VolunteerProject from "./components/VolunteerProject/Volunteer";
import StuntedGrowthVolunteer from "./components/VolunteerProject/StuntedGrowth";
import MaternalNutritionVolunteer from "./components/VolunteerProject/MaternalNutrition";
import MentalHealthVolunteer from "./components/VolunteerProject/MentalHealth";
import TalkToUs from "./components/MentalSupport/TalkToUs";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";  
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<TopicPage/>}></Route>
          <Route path="/StuntedPage" element={<StuntedPage/>}></Route>
          <Route path="/Maternity" element={<Maternity/>}></Route>
          <Route path="/MentalHealth" element={<MentalHealth/>}></Route>
          <Route path="/GeneralUse" element={<GeneralUse/>}></Route>
          <Route path='/healthrecord' element={<HealthRecord/>}></Route>
          <Route path='/helpdesk' element={<HelpDesk/>}></Route>
          <Route path="/TalkToUs" element={<TalkToUs/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/register" element={<Register/>}></Route>

          <Route path="/Volunteer" element={<VolunteerProject/>}></Route>
          <Route path="/StuntedGrowthVolunteer" element={<StuntedGrowthVolunteer/>}></Route>
          <Route path="/MaternalNutritionVolunteer" element={<MaternalNutritionVolunteer/>}></Route>
          <Route path="/MentalHealthVolunteer" element={<MentalHealthVolunteer/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}
  
export default App;