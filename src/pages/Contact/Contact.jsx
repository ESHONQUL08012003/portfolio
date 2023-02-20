import React from 'react';
import "./Contact.scss"

// import {HiOutlineMail} from "react-icons/hi"
// import {BsFillTelephonePlusFill} from "react-icons/bs"

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__section">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>

        <div className="row mt-2">
          <div className="col-md-6  contact__address">
            <a target="_blank" href="https://www.google.com/maps/place/Tashkent,+Uzbekistan/@41.2952771,69.236101,11.83z/data=!4m6!3m5!1s0x38ae8b0cc379e9c3:0xa5a9323b4aa5cb98!8m2!3d41.2994958!4d69.2400734!16zL20vMGZzbXk">
              <div className="info-box d-flex align-items-center">
                <i className="fas fa-map-marker-alt contact__icon"></i>
                <div>
                  <h3>My Address</h3>
                  <p>Tahkent Uzbekistan</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-6 mt-4 mt-md-0  contact__address">
            <div className="info-box d-flex align-items-center">
              <i className="fas fa-map-marker-alt contact__icon"></i>
              <div>
                <h3>Social Profiles</h3>
                <div className="social-links">
                  <a target="_blank" href="https://www.twitter.com/eshonqul74" className="twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" href="https://www.facebook.com/Eshonqul" className="facebook">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a target="_blank"
                    href="https://www.instagram.com/maxmadalivich_"
                    className="instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a target="_blank"
                    href="https://www.linkedin.com/in/eshonqul-abdulazizov-947230244/"
                    className="linkedin"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 d-flex contact__address">
            <div className="info-box d-flex align-items-center">
              <i className="fas fa-envelope contact__icon"></i>

              <div>
                <h3>Email Me</h3>
                <p>abdulazizoveshonqul66@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 contact__address">
            <div className="info-box d-flex align-items-center">
              <i className="fas fa-phone contact__icon"></i>
              <div>
                <h3>Call Me</h3>
                <p>+998 97 167 47 48</p>
              </div>
            </div>
          </div>
        </div>

        <form
          action="forms/contact.php"
          method="post"
          // role="form"
          className="php-email-form mt-4"
        >
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control contact__input"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control contact__input"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control contact__input"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group mt-3">
          <textarea
            className="form-control contact__input"
            name="message"
            rows="5"
            placeholder="Message"
            required
          ></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;