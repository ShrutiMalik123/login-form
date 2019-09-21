import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UserForm from "./UserForm";
import Login from "./Login";

function AppRouter() {
    return (
      <Router>
          <Switch>
          <Route path="/" exact component={UserForm} />
          <Route path="/sorting" component={Login} />
          </Switch>
          </Router>
  );
}