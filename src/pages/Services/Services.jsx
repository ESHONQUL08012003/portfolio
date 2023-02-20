import React from 'react';
import "./Services.scss"
import {genPresetColor} from "antd/es/style/index.js";

function Services() {
  return (
    <section data-aos="fade-up"
             data-aos-duration="500" id="services" className="services">
      <div  className="container text-white section__container">
        <div className="section-title">
          <h2>Services</h2>
          <p>My Services</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxl-dribbble"></i>
              </div>
              <h4>href=""Lorem Ipsum</h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-file"></i>
              </div>
              <h4>Sed ut perspiciatis</h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-tachometer"></i>
              </div>
              <h4>Magni Dolores</h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-world"></i>
              </div>
              <h4>Nemo Enim</h4>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-slideshow"></i>
              </div>
              <h4>Dele cardo</h4>
              <p>
                Quis consequatur saepe eligendi voluptatem consequatur dolor
                consequuntur
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-arch"></i>
              </div>
              <h4>Divera don</h4>
              <p>
                Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                sit aspernatur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;