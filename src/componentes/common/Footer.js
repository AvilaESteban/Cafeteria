import React from "react";
import Img from "../img/wattsapp.ico";
import Img1 from "../img/instagram.ico";
import Img2 from "../img/twitter.ico";
import Img3 from "../img/face.ico";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <body className="body-fo container-fluid d-flex flex-wrap">
        <div>
          <h6 className="text-light my-2">
            Derechos Reservados @CafeteriaBreak
          </h6>
        </div>
        <div>
          <div class="social-media-bar ">
            <div class="social-media">
              <a href="https://whatsApp.com">
                <img src={Img} alt="icono" className="icon"></img>
              </a>
              <div class="bar bar-top"></div>
              <div class="bar bar-right"></div>
              <div class="bar bar-bottom"></div>
              <div class="bar bar-left"></div>
            </div>

            <div class="social-media ">
              <a href="http://instagram.com">
                <img src={Img1} alt="icono" className="icono "></img>
              </a>
              <div class="bar bar-top"></div>
              <div class="bar bar-right"></div>
              <div class="bar bar-bottom"></div>
              <div class="bar bar-left"></div>
            </div>

            <div class="social-media">
              <a href="https://twitter.com">
                <img src={Img2} alt="icono" className="icono"></img>
              </a>
              <div class="bar bar-top"></div>
              <div class="bar bar-right"></div>
              <div class="bar bar-bottom"></div>
              <div class="bar bar-left"></div>
            </div>

            <div class="social-media">
              <a href="https://facebook.com">
                <img src={Img3} alt="icono" className="icono"></img>
              </a>
              <div class="bar bar-top"></div>
              <div class="bar bar-right"></div>
              <div class="bar bar-bottom"></div>
              <div class="bar bar-left"></div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Footer;
