import React from "react";
import { Link } from "react-router-dom";
import "./Volunteer.css";
  
const VolunteerProject = () => {
  return (
    <div>
      <h1>Our Volunteering Project</h1>
      <br />
      <div class = "Volunteer">
        <Link to="/StuntedGrowthVolunteer">
            <img src = "./images/volunteer1.jpg" width="300px" height="300px"></img>
        </Link>
        <Link to="/MaternalNutritionVolunteer">
            <img src = "./images/volunteer2.jpg" width="300px" height="300px"></img>
        </Link>
        <Link to="/MentalHealthVolunteer">
            <img src = "./images/volunteer3.jpg" width="300px" height="300px"></img>
        </Link>
      </div>
    </div>
  );
};
  
export default VolunteerProject;