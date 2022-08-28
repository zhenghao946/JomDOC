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

const MentalHealthVolunteer = () => {
  return (
    <div>
      <h1 class="volunteer-h1">Mental Health Volunteering Project</h1>
      <div class="wrapper">
        <h3 class="volunteer-h3">Benefits</h3>
        <div class="column">
          <center><img src="./images/volunteer-4.jpg" width="300px" height="300px"/></center> <br />
          Experiencing a life changing cultural journey to Indonesia
        </div>
        <div class="column">
          <center><img src="./images/volunteer-5.jpg" width="300px" height="300px"/></center> <br />
          Become more passionate about healthcare and gain a sense of community
        </div>
        <div class="column">
          <center><img src="./images/volunteer-6.jpg" width="300px" height="300px"/></center> <br />
          Make memories you will never forget with people from all over the world
        </div>
      </div>
      <div>
        <p> <h3 class="volunteer-h3">Highlights</h3> <br/>
        In this program, you will actively contribute to reduce mental health cases that happens in Indonesia.
        </p>
        <ul>
          <p class="tasks">Tasks Included:</p>
          <li>
            Encourage kind language. 
          </li>
          <li>
            Coordinate a mental health screening event.
          </li>
          <li>
            Encourage physical health that supports mental health
          </li>
        </ul>
      </div>
      <h3 class="volunteer-h3">Interested?</h3> <p>Drop down an email to us. We will be contacting you soon! <ButtonMailto label="Send us an E-Mail" mailto="mailto:hr@jomdoc.com" /></p>
    </div>
  );
};
  
export default MentalHealthVolunteer;