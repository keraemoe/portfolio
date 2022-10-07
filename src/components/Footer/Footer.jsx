import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Telegram from "@iconscout/react-unicons/icons/uil-telegram";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span className="gmail">weekera@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/keraemoe/" target="_blank">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/keraemoe">
            <Gitub color="white" size={"3rem"} />
          </a>
          <a href="https://t.me/keraemoe">
            <Telegram color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
