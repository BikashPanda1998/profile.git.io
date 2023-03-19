import React from "react";
import "../allcss/Contact.css";
import contactimg from "../images/video-thumb.jpg"
const Contact = () => {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">
                Hire Me.
              </h1>
                <p className="hire__text white">I am available for free freelance work. Connect with me via phone:</p>
                <p className="hire__text white"><strong>+91 7008379428</strong>or email: <strong>bikashpanda1804@gmail.com</strong></p>
            </div>
            <div className="input__box">
                <p  className="contact name">BIKASH KUMAR PANDA</p>
                <p  className="contact email">bikashpanda1804@gmail.com</p>
                <p  className="contact phone">+91 7008379428</p>
                
            </div>
          </div>
        </div>
        <div className="col__2">
            <img src={contactimg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
};
export default Contact;
