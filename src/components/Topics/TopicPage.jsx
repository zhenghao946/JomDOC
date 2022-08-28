import React from "react";
import { Link } from 'react-router-dom';
import './TopicPage.css';

const TopicPage = () => {
  return (
    <>
    <div className="Page">
     <div className="TopicContainer">
        <Link to="/StuntedPage"><h1>Stunted Growth</h1></Link>
        <img className="ruralPic" alt="kids in rural areas" src ="https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fkids_rural.jpg?alt=media&token=f4380597-2281-4850-aeee-b3691f25709b"></img>
        

        <Link to="/Maternity"><h1>Maternity Nutrition</h1></Link>
        <img className="MatPic" alt="a" src ="https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fmaternity.jpg?alt=media&token=e774b847-0a95-45a3-8112-5e7b509625ac"></img>
        

        <Link to="/MentalHealth"><h1>Mental Health</h1></Link>
        <img className="MentalPic" alt="a" src="https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fmental_health.jpg?alt=media&token=08b06cfd-db7c-4034-8784-7ab02a786b92"></img>
        

        <Link to="/GeneralUse"><h1>General Use</h1></Link>
        <img className="GeneralPic"  alt="a" src="https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fgeneral.jpg?alt=media&token=3f500ce5-4b4e-4799-825a-177c86d9deb5"></img>
       
    </div>
    </div>
    </>
  
  )
}

export default TopicPage;