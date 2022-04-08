import React, { useState, useEffect } from "react";
import "./registration.css";
import axios from "axios";
function Registration(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [role, setRole] = useState("");
  // setUsername("Tanu")
  function handleFirstname(e) {
    let val = e.target.value;
    setFirstname(val);
  }
  function handleLastname(e) {
    let val = e.target.value;
    setLastname(val);
  }

  function handleEmail(e) {
    let val = e.target.value;
    setEmail(val);
  }

  function handlePassword(e) {
    let val = e.target.value;
    setPassword(val);
  }

  function handleTitle(e) {
    let val = e.target.value;
    setTitle(val);
  }

  function handleConfirmpassword(e) {
    let val = e.target.value;
    setConfirmpassword(val);
  }

  function handleRole(e) {
    let val = e.target.value;
    setRole(val);
  }

  const handleRegister = (e) => {
    let data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      title: title,
      password: password,
      confirmpassword: confirmpassword,
      role: role,
    };

    axios
      .post("https://localhost:4000/register", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div class="container">
      <div class="title">Registration</div>
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input
              type="text"
              value={firstname}
              placeholder="Enter your first name"
              required
              onChange={handleFirstname}
            />
          </div>

          <div class="input-box">
            <span class="details">Last Name</span>
            <input
              type="text"
              value={firstname}
              placeholder="Enter your last name"
              required
              onChange={handleLastname}
            />
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input
              type="text"
              value={email}
              placeholder="Enter your email"
              required
              onChange={handleEmail}
            />
          </div>
          <div class="input-box">
            <span class="details">Title</span>
            <input
              type="text"
              value={title}
              placeholder="Enter the title"
              required
              onChange={handleTitle}
            />
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              required
              onChange={handlePassword}
            />
          </div>

          <div class="input-box">
            <span class="details"> ConfirmPassword</span>
            <input
              type="password"
              value={confirmpassword}
              placeholder="Enter your password again"
              required
              onChange={handleConfirmpassword}
            />
          </div>

          <div class="input-box">
            <span class="details">Role</span>
            <input
              type="text"
              value={role}
              placeholder="Enter role"
              required
              onChange={handleRole}
            />
          </div>
        </div>

        {
          /* <div class="gender-details">
          <span class="gender-title">Gender</span>
          <div class="category">
            <label for="">
              <span class="dot one">
                <span class="gender">Male</span>
                <input type="radio"></input>
              </span>
            </label>
            <label for="">
              <span class="dot one">
                <span class="gender">female</span>
                <input type="radio"></input>
              </span>
            </label>
            
          </div>
        </div>*/
          <div class="btn">
            <input type="submit" value="Register" onClick={handleRegister}/>
          </div>
        }
      </form>
    </div>
  );
}

export default Registration;
