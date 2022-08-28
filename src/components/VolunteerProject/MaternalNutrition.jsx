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
      <h1 class="volunteer-h1">Maternal Nutrition Volunteering Project</h1>
      <div class="wrapper">
        <h3 class="volunteer-h3">Benefits</h3>
        <div class="column">
          <center><img src="./images/volunteer-1.jpg" width="300px" height="300px"/></center> <br />
          Volunteer to have a meaningful social impact that really matters
        </div>
        <div class="column">
          <center><img src="./images/volunteer-2.png" width="300px" height="300px"/></center> <br />
          Discover Indonesia rural area and its beautiful nature
        </div>
        <div class="column">
          <center><img src="./images/volunteer-3.png" width="300px" height="300px"/></center> <br />
          Contribute actively to fight the Maternal Nutrition in Indonesia
        </div>
      </div>
      <div>
        <p> <h3 class="volunteer-h3">Highlights</h3> <br/>
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
      <h3 class="volunteer-h3">Interested?</h3> <p>Drop down an email to us. We will be contacting you soon! <ButtonMailto label="Send us an E-Mail" mailto="mailto:hr@jomdoc.com" /></p>
    </div>
  );
};
  
export default MaternalNutritionVolunteer;