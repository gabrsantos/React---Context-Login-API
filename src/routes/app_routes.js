import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard/index";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route>
          <Dashboard component={Dashboard} />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRoutes;
