import React from "react";
import "../Css/Login.css";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="wrapper">
      <strong>LOGIN</strong>
      <em>glad you are back, we have missed you</em>
      <form>
        <div className="field">
          <input type="text" className="Email" placeholder="Email" />
          <label htmlFor="Email">Email</label>
        </div>
        <div className="field">
          <input placeholder="Password" />
          <label>Pasword</label>
        </div>
        <span>Forgot password</span>
        <button>LOGIN TO MY ACCOUNT</button>
      </form>
      <span>
        Don't have account yet?
        <Link to="/SignUp">
          <span> Create it here</span>
        </Link>
      </span>
    </div>
  );
};
export default Login;
