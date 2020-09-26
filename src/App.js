import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AuthLogin from "./components/AuthLogin";
import Board from "./components/Board";
import AuthForm from "./routes/AuthForm";
import LiveClock from "./LiveClock";

function App() {
  return (
    <>
      <LiveClock />
      <HashRouter>
        <Navigation />
        <Route path="/AuthForm" component={AuthForm} />
      </HashRouter>
      <br />
      <Board />
      <br />
    </>
  );
}

export default App;
