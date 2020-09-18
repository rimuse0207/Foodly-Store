import React from "react";
import "../Css/Login.css";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  return (
    <div className="wrapper">
      <strong>CREATE ACOUNT</strong>
      <em>to take advantage of personalized shopping</em>
      <form>
        <div className="field">
          <input type="text" className="Email" placeholder="First name" />
          <label htmlFor="First name">First name</label>
        </div>
        <div className="field">
          <input type="text" className="Email" placeholder="Last name" />
          <label htmlFor="Last name">Last name</label>
        </div>
        <div className="field">
          <input type="text" className="Email" placeholder="Email" />
          <label htmlFor="Email">Email</label>
        </div>
        <div className="field">
          <input placeholder="Password" />
          <label>Pasword</label>
        </div>

        <button>CREATE MY ACCOUNT</button>
      </form>
      <span>
        <Link to="/">
          <span>Return to store</span>
        </Link>
      </span>
    </div>
  );
};
export default SignUp;
