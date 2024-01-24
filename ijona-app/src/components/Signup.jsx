import React, { useState } from "react";
import style from "./Signup.module.css";
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const payload = {
    username,
    password,
  };
  let data = JSON.parse(localStorage.getItem("userData")) || [];

  const handleSubmit = (e) => {
    e.preventDefault();

    data.push(payload);

    localStorage.setItem("userData", JSON.stringify(data));
    setusername("");
    setPassword("");
    console.log(data);
    navigate('/login')
  };

  const hanldeClick=()=>{
    navigate('/login')
  }

  return (
    <div className={style.main}>
      <h2>Signup</h2>
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
      <button onClick={(hanldeClick)} className={style.login}>Login</button>
    </div>
  );
};

export default Signup;
