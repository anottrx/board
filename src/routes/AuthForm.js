import React, { useState } from "react";

// 회원가입
const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "password2") {
      setPassword2(value);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if ({ password } !== { password2 }) {
      setError("비밀번호가 다릅니다");
    }
    try {
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        아이디
        <input
          name="email"
          type="email"
          required
          value={email}
          onChange={onChange}
        />
      </label>
      <br />
      <label>
        비밀번호
        <input
          name="password"
          type="password"
          required
          value={password}
          onChange={onChange}
        />
      </label>
      <br />
      <label>
        비밀번호 재입력
        <input
          name="password2"
          type="password"
          required
          value={password2}
          onChange={onChange}
        />
      </label>
      <br />
      <input type="submit" />
      {/* <button>회원가입</button> */}
      {error && <span>{error}</span>}
    </form>
  );
};

export default AuthForm;
