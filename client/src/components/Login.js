import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
    axios
      .post("http://localhost:4000/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);

        setPassword("");
        setUsername("");
      })
      .catch((err) => {
        if (username === "" || password === "") {
          return setErrMsg("Please fill the required fields!");
        }
        setErrMsg(err.response.data.message + "! Try again!");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="m-3">
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
    <p>{errMsg}</p>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
