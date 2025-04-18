import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import Landing from "./Components/Landing/index";
import Congratulations from "./Components/Auth/Congratulations";

export default function Routes() {
    return (
      <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/index" component={Landing} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/congratulations" component={Congratulations} />
      </Switch>
    );
  }
  