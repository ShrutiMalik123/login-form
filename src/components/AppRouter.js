import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UserForm from "./UserForm";
import Login from "./Login";
import Dashboard from "./Dashboard";

function AppRouter() {
    return (
      <Router>
          <Switch>
          <Route path="/" exact component={UserForm} />
          <Route path="/Login" component={Login} />
          <Route path="/Dashboard" component={Dashboard} />
          
          </Switch>
          </Router>
  );
}

export default AppRouter;