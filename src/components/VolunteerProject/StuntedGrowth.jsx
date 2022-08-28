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
    <div class = "volunteer">
      <h1 class="volunteer-h1">Stunted Growth Volunteering Project</h1>
      <div class="wrapper">
        <h3 class="volunteer-h3">Benefits</h3>
        <div class="column">
          <center><img src="https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fvolunteer-7.jpg?alt=media&token=a8080f35-7037-4669-a864-48c305b1c9e1" alt="" width="300px" height="300px"/></center> <br />
          Provide healthy food options to disadvantanged families
        </div>
        <div class="column">
          <center><img src="https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fvolunteer-8.gif?alt=media&token=68ca4e9b-ee71-4969-9739-7d722ad38ea1" alt="" width="300px" height="300px"/></center> <br />
          Educate families and children on nutritious foods and its importance
        </div>
        <div class="column">
          <center><img src="https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fvolunteer-9.jpg?alt=media&token=ddacbaf5-23ce-46b8-a361-4b8f8acd1a47" alt="" width="300px" height="300px"/></center> <br />
          Improve the health and long term wellbeing of the people of Indonesia
        </div>
      </div>
      <div>
        <p><h3 class="volunteer-h3">Highlights</h3> <br/>
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