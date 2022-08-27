import React from "react";
import { Link } from 'react-router-dom';
import './TopicPage.css';



const TopicPage = () => {
  return (
    <>
    <div className="Page">
     <div className="TopicContainer">
        <Link to="/StuntedPage"><h1>Stunted Growth</h1></Link>
        <img className="ruralPic" alt="kids in rural areas" src ="images/kids_rural.jpg"></img>
        

        <Link to="/Maternity"><h1>Maternity Nutrition</h1></Link>
        <img className="MatPic" alt="a" src ="images/maternity.jpg"></img>
        

        <Link to="/MentalHealth"><h1>Mental Health</h1></Link>
        <img className="MentalPic" alt="a" src="images/mental_health.jpg"></img>
        

        <Link to="/GeneralUse"><h1>General Use</h1></Link>
        <img className="GeneralPic"  alt="a" src="images/general.jpg"></img>
       
    </div>
    </div>
    </>
  
  )
}

export default TopicPage;