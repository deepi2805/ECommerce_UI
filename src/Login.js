import React, { useState , useEffect} from "react";
import "./login.css";
import axios from "axios";
function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // setUsername("Tanu")
  function handleUsername(e) {
    let val = e.target.value;
    setUsername(val);
  }


  function handlePassword(e) {
    let val = e.target.value;
    setPassword(val);
  }

  const handleLogin=(e)=>{
// props.history.push("/home")
// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }
let data = {
    email:username,
    password:password,
}
// axios.post("https://reqres.in/api/login",data).then(function (response) {
//     console.log(response);
//   })

axios.get("https://reqres.in//api/users?page",data).then(function (response) {
    console.log(response);
})

  .catch(function (error) {
    console.log(error);
  });
  }

  useEffect(function(){
      if(password.length==1){
        alert("use EFFECT")
      }

     
  },[username,password])
  return (
    <div class="center">
      <span id="demo"> </span>
      <h1> Login </h1>
      <form method="post">
        <div class="text_field">
          <input type="text" value={username} onChange={handleUsername} />

          <label> Username </label>
        </div>
        <br />
        <div class="text_field">
          <input type="password" value={password} onChange={handlePassword} />{" "}
          <label>Password</label>
        </div>
        <br />

        <div>Forget Password?</div>
        <br />

        <input class="button" type="button" onClick={handleLogin} value="Login" />
        <br />
        <div>
          <br />
          Not a member? <a href="#">signup.</a>
        </div>
      </form>
    </div>
  );
}
export default Login;
