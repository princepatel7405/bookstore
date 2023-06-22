import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
    };
    //console.log(payload);

    fetch(`http://localhost:8080/login/register`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    alert("You have successfully Registered");
    navigate("/login")
  };
  return (
    <div>
          <h1>Register</h1>
      <form action="" onSubmit={(e) => submitHandler(e)}>
        <input
          style={{
            padding: "2.5px",
            margin: "10px",
            borderRadius: "2.5px",
            border: "1px solid blue",
          }}
          type="text"
          placeholder="Enter Name Here"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
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
  )
}

export default Register