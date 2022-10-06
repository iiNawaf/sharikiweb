import React, { useState } from "react";
import "../css/App.css";
import "../css/Login.css";
import CustomInput from "../components/CustomInput";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="App">
      <div className="LoginBox">
        <form className="FormBox">
          <CustomInput
            value={email}
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.email);
            }}
          />
          <br/>
          <CustomInput
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br/>
          <input type="submit" className="ButtonStyle" placeholder="Login" />
        </form>
      </div>
    </div>
  );
}

export default Login;
