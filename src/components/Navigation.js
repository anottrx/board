import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/AuthForm">AuthForm</Link>
      <br />
      <Link to="/AuthLogin">AuthLogin</Link>
    </div>
  );
}

export default Navigation;
