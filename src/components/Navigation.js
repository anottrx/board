import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/AuthForm">회원가입</Link>
      <br />
      <Link to="/AuthLogin">로그인</Link>
      <br />
      <Link to="/Post">글쓰기</Link>
    </div>
  );
}

export default Navigation;
