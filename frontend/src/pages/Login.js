import React from "react";
import { LoginBg } from "../assets";
import Input from "../component/Input";
import Button from "../component/Button";
import Gap from "../component/Gap";
import Link from "../component/Link";
import Underline from "../component/Underline";
import { useHistory } from "react-router-dom";

const Login = () => {
  const navigate = useHistory();
  return (
    <div>
      <div className="main-page">
        <div className="left">
          <img src={LoginBg} alt="ilustrator" className="bg-image" />
        </div>
        <div className="right">
          <p>Login</p>
          <Underline backgroundColor={"white"} />
          <div className="input-register">
            <Input label="Email" type="email" placeholder="email" />
            <Gap height={12} />
            <Input label="Password" type="password" placeholder="password" />
            <Gap height={35} />
            <Button title="Login" type="submit" onClick={() => navigate.push("/")} />
            <Gap height={25} />
            <Link title="Don't have an account? Register" onClick={() => navigate.push("/register")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
