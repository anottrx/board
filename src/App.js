import React from "react";
import AuthLogin from "./components/AuthLogin";
import Board from "./components/Board";
import LiveClock from "./LiveClock";

function App() {
  return (
    <>
      <LiveClock />
      <AuthLogin />
      <Board />
    </>
  );
}

export default App;
