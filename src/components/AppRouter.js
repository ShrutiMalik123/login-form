import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UserForm from "./UserForm";
import Login from "./Login";
import Dashboard from "./Dashboard";
import About from "./About";
import Music from "./Music";
import Carousal from "./Carousal";

function AppRouter() {
    return (
      <Router>
          <Switch>
          <Route path="/" exact component={Carousal} />
          <Route path="/Login" component={Login} />
          <Route path="/UserForm" component={UserForm} />
          <Route path="/About" component={About} />
          <Route path="/Music" component={Music} />
          <Route path="/Dashboard" component={Dashboard} />
          </Switch>
          </Router>
  );
}

export default AppRouter;