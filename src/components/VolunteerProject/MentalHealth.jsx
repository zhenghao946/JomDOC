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
          <center><img src="https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fvolunteer-4.jpg?alt=media&token=dc335e6c-8e0e-4b30-8969-b10c276c07a0" alt="" width="300px" height="300px"/></center> <br />
          Experiencing a life changing cultural journey to Indonesia
        </div>
        <div class="column">
          <center><img src="https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fvolunteer-5.jpg?alt=media&token=2ee7b457-3253-46d4-82d3-b9b0e55b5f11" alt="" width="300px" height="300px"/></center> <br />
          Become more passionate about healthcare and gain a sense of community
        </div>
        <div class="column">
          <center><img src="https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fvolunteer-6.jpg?alt=media&token=6ae9e9b8-8efc-40a8-9d39-15f4d3e56e42" alt="" width="300px" height="300px"/></center> <br />
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