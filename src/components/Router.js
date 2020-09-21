import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import AuthForm from "routes/AuthForm";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/authLogin">
        <AuthForm />
      </Route>
    </Router>
  );
};

export default AppRouter;
