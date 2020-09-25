import React from "react";

// 로그인
const AuthLogin = () => {
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
      </form>
    </>
  );
};

export default AuthLogin;
