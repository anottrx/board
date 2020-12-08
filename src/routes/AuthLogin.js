import React, { Component, useState } from "react";

// 로그인
function AuthLogin() {
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const onLogin = (event) => {
    const {
      target: { name, value },
    } = event;
    console.log(event);
  };

  return (
    <>
      <form className="login">
        <label>
          아이디
          <input value={id} type="email" required />
        </label>
        <br />
        <label>
          비밀번호
          <input value={pw} type="password" required />
        </label>
        <br />
        <button onClick={onLogin}>로그인</button>
      </form>
    </>
  );
}

export default AuthLogin;
