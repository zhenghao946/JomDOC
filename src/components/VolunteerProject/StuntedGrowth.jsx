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

const StuntedGrowthVolunteer = () => {
  return (
    <div>
      <h1 class="volunteer-h1">Stunted Growth Volunteering Project</h1>
      <div class="wrapper">
        <h3 class="volunteer-h3">Benefits</h3>
        <div class="column">
          <center><img src="./images/volunteer-7.jpg" width="300px" height="300px"/></center> <br />
          Provide healthy food options to disadvantanged families
        </div>
        <div class="column">
          <center><img src="./images/volunteer-8.gif" width="300px" height="300px"/></center> <br />
          Educate families and children on nutritious foods and its importance
        </div>
        <div class="column">
          <center><img src="./images/volunteer-9.jpg" width="300px" height="300px"/></center> <br />
          Improve the health and long term wellbeing of the people of Indonesia
        </div>
      </div>
      <div>
        <p> <h3 class="volunteer-h3">Highlights</h3> <br/>
        In this program, you will actively contribute to reduce stunted growth issues that happens in Indonesia.
        </p>
        <ul>
          <p class="tasks">Tasks Included:</p>
          <li>
            Take part in some of the recreation and education programs
          </li>
          <li>
            Assist with and actively participate in fundraising campaigns
          </li>
          <li>
            Create activities depending on volunteer's skills and interests
          </li>
        </ul>
      </div>
      <h3 class="volunteer-h3">Interested?</h3> <p>Drop down an email to us. We will be contacting you soon! <ButtonMailto label="Send us an E-Mail" mailto="mailto:hr@jomdoc.com" /></p>
    </div>
  );
};
  
export default StuntedGrowthVolunteer;