import React, { Component } from "react";
import {Navbar} from './Navbar';
import './Login.css';
import {Link} from 'react-router-dom';
import { Segment } from "semantic-ui-react";
export function Signup (){
    return (
       <div>
          <Segment inverted color="blue">
        <Link className="company-logo" style={{ color: "white", float: "left"}} to="/">
        Price Tracker and Recommendation Tool
        </Link>
      </Segment>
          <div class="page-login">
  <div class="ui centered grid container">
    <div class="nine wide column">
      <div class="ui fluid card">
        <div class="content">
        <form class="ui form" method="POST">
          <div class="field">
            <label>Username</label>
            <input type="text" name="user" placeholder="Enter Username"/>
          </div>
          <div class="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter email"/>
          </div>
          <div class="field">
            <label>Password</label>
            <input type="password" name="pass" placeholder="Password"/>
          </div>
          <div class="field">
            <label>Contact</label>
            <input type="number" name="contact" placeholder="Optional"/>
          </div>
          <button class="ui primary labeled icon button" type="submit">
            <i class="unlock alternate icon"></i>
            Signup
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
