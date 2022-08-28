import React from "react";
import { Link } from "react-router-dom";
import "./Volunteer.css";
  
const VolunteerProject = () => {

  return (
    <div class="volunteer">
      <h1 class="volunteer-h1">Our Volunteering Project</h1>
      <br />
      <div class = "Volunteer">
        <Link to="/StuntedGrowthVolunteer">
            <img src = 'https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fstunted-growth.jpg?alt=media&token=124de840-f9db-4e49-b6dd-233b554994cc' alt="" width="300px" height="300px"></img>
        </Link>
        <Link to="/MaternalNutritionVolunteer">
            <img src = "https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fmaternal-nutrition.jpg?alt=media&token=6b9e4e1e-f43d-49a0-bb28-4b14c965b239" alt="" width="300px" height="300px"></img>
        </Link>
        <Link to="/MentalHealthVolunteer">
            <img src = "https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fmental-health.jpg?alt=media&token=e8b65e85-47dd-45db-ac1e-83d9291bd3ce" alt="" width="300px" height="300px"></img>
        </Link>
      </div>
    </div>
  );
};
  
export default VolunteerProject;