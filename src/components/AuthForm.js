import React from "react";
import { Link } from "react-router-dom";

const AuthForm = () => {
  return (
    <>
      <form className="login">
        <label>
          아이디
          <input type="email" required />
        </label>
        <br />
        <label>
          비밀번호
          <input type="password" required />
        </label>
        <br />
        <button>로그인</button>
        <button>회원가입</button>
        <label>
          <input type="checkbox" name="alwaysLogin" />
          자동 로그인
        </label>
      </form>
    </>
  );
};

export default AuthForm;
