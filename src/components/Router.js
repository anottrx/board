import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import AuthLogin from "routes/AuthLogin";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/authLogin">
        <AuthLogin />
      </Route>
    </Router>
  );
};

export default AppRouter;
