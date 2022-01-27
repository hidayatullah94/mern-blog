import React from "react";
import "../style/register.scss";
import { RegisterBg } from "../assets";
import Input from "../component/Input";
import Button from "../component/Button";
import Gap from "../component/Gap";
import Link from "../component/Link";
import Underline from "../component/Underline";
import { useHistory } from "react-router-dom";

const Register = () => {
  const navigate = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} alt="ilustrator" className="bg-image" />
      </div>
      <div className="right">
        <p>Register</p>
        <Underline backgroundColor={"white"} />
        <div className="input-register">
          <Input label="Full Name" type="text" placeholder="full name" />
          <Gap height={12} />
          <Input label="Email" type="email" placeholder="email" />
          <Gap height={12} />
          <Input label="Password" type="password" placeholder="password" />
          <Gap height={35} />
          <Button title="Register" type="submit" onClick={() => navigate.push("/login")} />
          <Gap height={25} />
          <Link title="Do Have an Account? Login" onClick={() => navigate.push("/login")} />
        </div>
      </div>
    </div>
  );
};

export default Register;
