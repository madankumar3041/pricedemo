import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./Login.css";
import { Segment } from "semantic-ui-react";
export function Login() {
  return (
    // <div>
    //   <Segment inverted color="blue">
    //     <Link
    //       className="company-logo"
    //       style={{ color: "white", float: "left" }}
    //       to="/"
    //     >
    //       Price Tracker and Recommendation Tool
    //     </Link>
    //   </Segment>
    //   <div class="page-login">
    //     <div class="ui centered grid container">
    //       <div class="nine wide column">
    //         <div class="ui fluid card">
    //           <div class="content">
    //             <form class="ui form">
    //               <div class="field">
    //                 <label>User</label>
    //                 <input
    //                   type="text"
    //                   name="user"
    //                   placeholder="User"
    //                   required
    //                 />
    //               </div>
    //               <div class="field">
    //                 <label>Password</label>
    //                 <input
    //                   type="password"
    //                   name="pass"
    //                   placeholder="Password"
    //                   required
    //                 />
    //               </div>
    //               <button class="ui primary labeled icon button" type="submit">
    //                 <i class="unlock alternate icon"></i>
    //                 <Link to="/list" style={{ color: "white" }}>
    //                   Login
    //                 </Link>
    //               </button>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="image-dotted">
      <div className="nav-bar-page">
        <div className="navbar">
          <ul>
            <li>
              <a href="#/">Price Tracker and Recommendation Tool</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="page-login">
        <div class="ui centered grid container">
          <div class="nine wide column">
            <div class="ui fluid card">
              <div class="content">
                <form class="ui form">
                  <div class="field">
                    <label>User</label>
                    <input
                      type="text"
                      name="user"
                      placeholder="User"
                      required
                    />
                  </div>
                  <div class="field">
                    <label>Password</label>
                    <input
                      type="password"
                      name="pass"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <button class="ui primary labeled icon button" type="submit">
                    <i class="unlock alternate icon"></i>
                    <Link to="/list" style={{ color: "white" }}>
                      Login
                    </Link>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
