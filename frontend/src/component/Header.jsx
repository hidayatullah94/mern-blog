import React from "react";
import "../style/main.scss";
import * as icons from "react-bootstrap-icons";
import { logo } from "../assets";
import { NavLink, useHistory } from "react-router-dom";

function Header() {
  const navigate = useHistory();
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
          <h4 className="logos">Mren-Blog</h4>
          <ul className="nav-link">
            <li>
              <NavLink exact="true" to="/" className={"a-link"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact="true" to="/create" className={"a-link"}>
                Create Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="log-out" onClick={() => navigate.push("/login")}>
          <icons.BoxArrowRight />
          <p className="p-out">Log out</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
