import React, { useEffect, useState} from 'react';
import { Link, Redirect } from "react-router-dom";
import Snowfall from "react-snowfall";

export default function Congratulations() {
  const [next, setNext] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNext(true);
    }, 3500);
  }, []);
  
  if (next) {
    return <Redirect to="index" />
  }
  return (
    <div className="main row">
      <div className="col-md-6 leftSide">
        <img src="img/logo.png" alt="logo" height="100" />
        <h1>Welcome Back!</h1>
        <p className="text-center mt-2">
          To keep connected with us please<br />
          <span>SignIn with your personal info.</span>
        </p>
        <Link to="/" className="btn btn-outline-light btn-rounded mt-4">SiGN IN</Link>
      </div>
      <div className="col-md-6 rightSide">
        <Snowfall color="#EA1D2C" snowflakeCount={100} />
        <div className="checkmark-holder">
          <div className="inside load-complete">
            <div className="checkmark draw"></div>
          </div>
        </div>
        <h1 className="mt-3 mb-2">Congratulation!</h1>
        <h4>Your Registration is Successful</h4>
      </div>
    </div>
  )
}
