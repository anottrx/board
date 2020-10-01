import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AuthForm from "routes/AuthForm";
import AuthLogin from "./AuthLogin";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/authLogin">
          <AuthLogin />
        </Route>
        <Route exact path="/authForm">
          <AuthForm />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
