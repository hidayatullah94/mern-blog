import React from "react";
import * as icons from "react-bootstrap-icons";
import "../style/main.scss";
import { logo } from "../assets";

function Footer() {
  let date = new Date();
  let years = date.getFullYear();

  return (
    <div>
      <div className="footer">
        <div className="logo-foter">
          <img src={logo} alt="" />
        </div>
        <div className="copy">
          <p>Copy_Right {years}</p>
        </div>
        <div className="sosial-media">
          <span className="wa">
            <icons.Whatsapp />
          </span>
          <span className="ig">
            <icons.Instagram />
          </span>
          <span className="fb">
            <icons.Facebook />
          </span>
          <span className="gh">
            <icons.Github />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
