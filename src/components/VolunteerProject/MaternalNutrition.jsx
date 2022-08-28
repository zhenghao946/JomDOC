import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
  return (
      <Link
          to='#'
          onClick={(e) => {
              window.location.href = mailto;
              e.preventDefault();
          }}
      >
          {label}
      </Link>
  );
};

const MaternalNutritionVolunteer = () => {
  return (
    <div>
      <h1>Maternal Nutrition Volunteering Project</h1>
      <div class="wrapper">
        <h3>Benefits</h3>
        <div class="column">
          <center><img src="https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fvolunteer-1.jpg?alt=media&token=feb98d85-a070-46c2-b132-c3d2e08cb5b9" alt="" width="300px" height="300px"/></center> <br />
          Volunteer to have a meaningful social impact that really matters
        </div>
        <div class="column">
          <center><img src="https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fvolunteer-2.jpg?alt=media&token=ee6e0c00-2a57-47d6-8f13-190f0aec2847" alt="" width="300px" height="300px"/></center> <br />
          Discover Indonesia rural area and its beautiful nature
        </div>
        <div class="column">
          <center><img src="https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fvolunteer-3.png?alt=media&token=cbd3f6dc-f6bd-441c-a4ec-4da20eec7d27" alt="" width="300px" height="300px"/></center> <br />
          Contribute actively to fight the Maternal Nutrition in Indonesia
        </div>
      </div>
      <div>
        <p> <h3>Highlights</h3> <br/>
        In this program, you will actively contribute to Maternal Nutrition that happens in Indonesia.
        You will help the local team collecting, organizing and distributing the nutrition foods for the citizens.
        </p>
        <ul>
          <p class="tasks">Tasks Included:</p>
          <li>
            Collecting the food from local providers / sponsors
          </li>
          <li>
            Assisting with packaging it
          </li>
          <li>
            Distributing it to the families
          </li>
        </ul>
      </div>
      <h3>Interested?</h3> <p>Drop down an email to us. We will be contacting you soon! <ButtonMailto label="Send us an E-Mail" mailto="mailto:hr@jomdoc.com" /></p>
    </div>
  );
};
  
export default MaternalNutritionVolunteer;