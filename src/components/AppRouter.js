import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UserForm from "./UserForm";
import Login from "./Login";
import Dashboard from "./Dashboard";
import About from "./About";
import Contact from "./Contact";

function AppRouter() {
    return (
      <Router>
          <Switch>
          <Route path="/" exact component={UserForm} />
          <Route path="/Login" component={Login} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          </Switch>
          </Router>
  );
}

export default AppRouter;