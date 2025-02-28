import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import googleLogo from "../resources/googleLogo.svg";
import CircularComponent from "./CircularComponent";

export default function SignInPage() {
  const [teamName, setTeamName] = useState("");
  const [email, setEmail] = useState("");

  // testing
  useEffect(() => {
    console.log(teamName);
  }, [teamName]);

  return (
    <div className="signInPage">
      <CircularComponent className="firstCircle" />

      <div className="signInContainer">
        <div className="signInHead">
          <h2>Sign In</h2>
        </div>

        <form action="">
          <div className="input-div team-name-input">
            <label htmlFor="team-name">Team Name</label>
            <input
              onChange={(e) => {
                setTeamName(e.target.value);
              }}
              type="text"
              id="team-name"
              value={teamName}
              placeholder="Enter your team name"
            />
          </div>

          <div className="input-div email-input">
            <label htmlFor="email">Email</label>
            <input
              onInput={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              id="email"
              value={email}
              placeholder="Enter your email"
            />
          </div>

          <button className="getOtpButton">Get OTP</button>

          <div class="or-container">
            <div class="line"></div>
            <span class="or-text">OR</span>
            <div class="line"></div>
          </div>

          <button className="google-signin-btn">
            <img src={googleLogo} alt="Google Logo" className="google-logo" />
            Sign In With Google
          </button>

          <div class="signup-option">
            <p>
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </form>
      </div>

      <CircularComponent className="secondCircle" />
    </div>
  );
}
