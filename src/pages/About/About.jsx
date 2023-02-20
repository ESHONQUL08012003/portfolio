import React from "react";
import "./About.scss";
import meImg from "../../assets/imgs/me.jpg";
import { BsEmojiSmileFill } from "react-icons/bs";

function About() {

  return (
    <>
      <section className="bg-da about">
        <div className="container section__container">
          <div className="d-flex align-items-center gap-1 mb-4">
            <strong className="about__title">ABOUT</strong>
            <span className="about__arrov"></span>
          </div>

          <h2 className="text-white fw-bold mb-4">LEARN MORE ABOUT ME</h2>

          <div className="section__hero">
            <img
              src={meImg}
              style={{ width: "403px", height: "403px" }}
              alt=""
            />

            <div>
              <h2 className="text-success">React jsx deweloper</h2>
              <i className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </i>

              <div className="my-contact">
                <ul className="list-unstyled text-white mt-3">
                  <li className="d-flex mb-3">
                    <strong className="me-2">

                      <i className="text-success me-2 fas fa-chevron-right"></i>
                      Birthday:
                    </strong>
                    <span>8 January 2003</span>
                  </li>
                  <li className="d-flex mb-3">
                    <strong className="me-2">

                      <i className="text-success me-2 fas fa-chevron-right"></i>
                      Website:
                    </strong>
                    <span>www.example.com</span>
                  </li>

                  <li className="d-flex mb-3">
                    <strong className="me-2">

                      <i className="text-success me-2 fas fa-chevron-right"></i>
                      Phone:
                    </strong>
                    <span>+998 97 167 47 48</span>
                  </li>

                  <li className="d-flex mb-3">
                    <strong className="me-2">

                      <i className="text-success me-2 fas fa-chevron-right"></i>
                      City:
                    </strong>
                    <span>Tashkent, UZB</span>
                  </li>
                </ul>

                <ul className="list-unstyled text-white mt-3">
                  <li className="d-flex mb-3">
                    <strong className="me-2">
                      {" "}
                      <i className="text-success me-2 fas fa-chevron-right"></i>
                      Age:
                    </strong>
                    <span>20</span>
                  </li>
                  <li className="d-flex mb-3">
                    <strong className="me-2">
                      {" "}
                      <i className="text-success me-2 fas fa-chevron-right"></i>
                      Tashkent, UZB:
                    </strong>
                    <span>Junior</span>
                  </li>

                  <li className="d-flex mb-3">
                    <strong className="me-2">
                      {" "}
                      <i className="text-success me-2 fas fa-chevron-right"></i>
                      PhEmailone:
                    </strong>
                    <span>abdulazizoveshonqul66@gmail.con</span>
                  </li>

                  <li className="d-flex mb-3">
                    <strong className="me-2">
                      {" "}
                      <i className="text-success me-2 fas fa-chevron-right"></i>
                      Freelance:
                    </strong>
                    <span>Available</span>
                  </li>
                </ul>
              </div>

              <p className="text-white">
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </p>
            </div>
          </div>

          <div className="costumer">
            <ul className="costumer__list">
              <li className="costumer__list-item position-relative">
                <BsEmojiSmileFill className="text-success costumer__icon" />
                <h2 className="text-white my-3">0</h2>
                <p className="text-white">Happy Clients</p>
              </li>

              <li className="costumer__list-item position-relative">
                <BsEmojiSmileFill className="text-success costumer__icon" />
                <h2 className="text-white my-3">0</h2>
                <p className="text-white">Happy Clients</p>
              </li>

              <li className="costumer__list-item position-relative">
                <BsEmojiSmileFill className="text-success costumer__icon" />
                <h2 className="text-white my-3">0</h2>
                <p className="text-white">Happy Clients</p>
              </li>

              <li className="costumer__list-item position-relative">
                <BsEmojiSmileFill className="text-success costumer__icon" />
                <h2 className="text-white my-3">0</h2>
                <p className="text-white">Happy Clients</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;