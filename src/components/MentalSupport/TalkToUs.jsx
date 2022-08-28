import React, { useRef } from 'react';
import "./TalkToUs.css";
import emailjs from 'emailjs-com';
import { Link } from "react-router-dom";

export const TalkToUs  = () => {
const sendEmail = (e) => {
	e.preventDefault();

	emailjs.sendForm('jomdoc_service', 'AssignedMedicalSupport', form.current, 'TNr4Rgj0x0sKVLtv0')
	.then((result) => {
		console.log(result.text);
	}, (error) => {
		console.log(error.text);
	});
	form.current.reset();
};

const form = useRef();

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

    return (
        <div class="talkToUs">
            <h1 class="contact-h1">Contact Us</h1>
            <h3 class="contact-h3">We are here to help you!</h3>
            <div class="contact-wrapper">
                <div class="contact-column">
                    <img src="https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fphone.jpg?alt=media&token=c7366ed9-341b-4bf5-bff6-17f2ece5e2a3" alt="" width="100px" height="100px"></img> <br />
                    <h2 class="contact-h2">Call Us!</h2> <a class="contact-a" href="tel:1300-88-88-1312"> 1300-88-88-1312 </a>
                </div>
                <div class="contact-column">
                    <img src="https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fchat.png?alt=media&token=59f645f6-9cdc-47bb-a33f-7440cfd21a1b" alt="" width="100px" height="100px"></img> <br />
                    <h2 class="contact-h2">Live Chat</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="hidden" name="to_name" value="me"></input>
                        <input type="hidden" name="to_email" value="xueyi990207@gmail.com"></input>
                        <input type="hidden" name="WhatsApp_Link" value="60103870293"></input>
                        <input type="submit" class="btn btn-info" value="Chat Now"></input>
                    </form>
                </div>
            </div>
            <p> For media queries, contact <ButtonMailto label="media@jomdoc.com" mailto="mailto:mail@jomdoc.com" /> or find your regional media contact. </p>
        </div>
    );
};

export default TalkToUs;