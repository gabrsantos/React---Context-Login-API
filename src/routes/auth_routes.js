import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "../pages/SignIn/index";

function AuthRoutes() {
  return (
    <Router>
      <Switch>
        <Route>
          <SignIn component={SignIn} />
        </Route>
      </Switch>
    </Router>
  );
}

export default AuthRoutes;
