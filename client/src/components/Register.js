import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:4000/register", {
      username: username,
      password: password
    }).then((res) => {

      setUsername("")
      setPassword("")
      alert("registered user!") 
      console.log(res)
    }).catch((err) => {
      if(username === "" || password === "" ) {
        return setErrMsg("Required fields cant be empty!*")
      }

      setErrMsg("Username " +err.response.data.message + "!")

    })
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
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
