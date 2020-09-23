import React, { useState } from "react";
import AuthLogin from "components/AuthLogin";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
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
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    try {
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form>
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
        닉네임
        <input
          name="nickname"
          type="text"
          required
          value={nickname}
          onChange={onChange}
        />
      </label>
      <br />
      <button>회원가입완료</button>
      {error && <span>{error}</span>}
    </form>
  );
};

export default AuthForm;
