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
            <img src = 'https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fvolunteer1.jpg?alt=media&token=feb98d85-a070-46c2-b132-c3d2e08cb5b9' width="300px" height="300px"></img>
        </Link>
        <Link to="/MaternalNutritionVolunteer">
            <img src = "https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fvolunteer2.jpg?alt=media&token=1f586fc5-7497-46b3-ae17-a3d8698ca7ab" width="300px" height="300px"></img>
        </Link>
        <Link to="/MentalHealthVolunteer">
            <img src = "https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fvolunteer3.jpg?alt=media&token=87ad67db-64ee-4961-ba83-eac7712776bd" width="300px" height="300px"></img>
        </Link>
      </div>
    </div>
  );
};
  
export default VolunteerProject;