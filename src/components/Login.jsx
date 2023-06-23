import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    
    fetch(`http://localhost:8080/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
      })
      .catch((err) => console.log(err));
    alert("You have successfully Logged in");
    navigate("/")
  };
  return (
    <div>
      <h1>Log In</h1>
      <form action="" onSubmit={(e) => submitHandler(e)}>
        <input
          style={{
            padding: "2.5px",
            margin: "10px",
            borderRadius: "2.5px",
            border: "1px solid blue",
          }}
          type="text"
          placeholder="Enter Email Here"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <input
          style={{
            padding: "2.5px",
            margin: "10px",
            borderRadius: "2.5px",
            border: "1px solid blue",
          }}
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <input
          style={{ padding: "5px 15px", borderRadius: "20px" }}
          type={"submit"}
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Login;
