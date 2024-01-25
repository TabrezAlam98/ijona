import React, { useState } from "react";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const payload = {
    username,
    password,
  };
  let data = JSON.parse(localStorage.getItem("userData")) || [];

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let i = 0; i < data.length; i++) {
      if (data[i].username == 0) {
        alert("Please enter username");
        break;
      } else if (data[i].username == username) {
        alert("login successfull");
        navigate("/");
        break;
      } else {
        alert("login successfull");
        navigate("/");
        break;
      }
    }
  };

  const hanldeClick = () => {
    navigate("/signup");
  };
  console.log(data);
  return (
    <div className={style.main}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="User name"
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          required
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input className={style.submit} type="submit" />
      </form>
      <button onClick={hanldeClick} className={style.logout}>
        Logout
      </button>
    </div>
  );
};

export default Login;
