import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AuthLogin from "./routes/AuthLogin";
import Board from "./components/Board";
import AuthForm from "./routes/AuthForm";
import Post from "./routes/Post";
import LiveClock from "./LiveClock";

function App() {
  return (
    <>
      <LiveClock />
      <HashRouter>
        <Navigation />
        <Route path="/AuthForm" component={AuthForm} />
        <Route path="/AuthLogin" component={AuthLogin} />
        <Route path="/Post" component={Post} />
      </HashRouter>
      <br />
      {/* <Board /> */}
      <br />
    </>
  );
}

export default App;
