import React from 'react';
import SignUpForm from './SignUpForm';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="row main">
        <div className="col-md-6 leftSide">
          <img src="img/logo.png" alt="logo" height="100"/>
          <h1>Welcome Back!</h1>
          <p className="text-center mt-2">
            To keep connected with us please<br />
            <span>SignIn with your personal info.</span>
          </p>
          <Link to="/" className="btn btn-outline-light btn-rounded mt-4">SiGN IN</Link>
        </div>
        <div className="col-md-6 rightSide">
            <SignUpForm />
        </div>
    </div>
  );
}

export default App;