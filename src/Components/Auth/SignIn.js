import React from 'react';
import LoginForm from './LoginForm';
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="row main">
        <div className="col-md-6 leftSide">
          <img src="img/logo.png" alt="logo" height="100"/>
          <p className="text-center mt-2">
            To keep connected with us please<br />
            <span>Complete Registration.</span>
          </p>
          <Link to="/signup" className="btn btn-outline-light btn-rounded mt-4">SiGN UP</Link>
        </div>
        <div className="col-md-6 rightSide">
          <LoginForm />
        </div>
    </div>
  );
}

export default SignIn;