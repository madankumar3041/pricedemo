import React, { Component } from "react";
import "./Navbar.css";
export function Navbar() {
  return (
    <div className="image-dot">
      <div className="nav-bar-page">
        {/* <Segment inverted color="blue">
        <Link
          className="company-logo"
          style={{ color: "white", float: "left" }}
          to="/"
        >
          Price Tracker and Recommendation Tool
        </Link>
        <Link style={{ color: "white", float: "right" }} to="/login">
          Login
        </Link>
        <Link style={{ color: "white", float: "right" }} to="/signup">
          SignUp/
        </Link>
      </Segment> */}
        <div className="navbar">
          <ul>
            <li>
              <a href="#/">Price Tracker and Recommendation Tool</a>
            </li>
          </ul>
          <ul>
            {/* <li>
              <a href="#/signup">Signup</a>
            </li> */}
            <li>
              <a href="#/login">Login</a>
            </li>
          </ul>
        </div>
        <div className="contenting">
          <h1>
            Provides Competitive Pricing On Major Online <br />
            Marketplaces
          </h1>
          <p>
            Strategic price recommendation. Insights to gaps in the online
            marketplaces
          </p>
        </div>
      </div>
    </div>
  );
}
