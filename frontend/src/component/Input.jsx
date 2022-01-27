import React from "react";
import "../style/main.scss";

function Input({ label, ...rest }) {
  return (
    <div className="input-form">
      <label className="label-form" htmlFor="">
        {label}
      </label>
      <input className="input-type" {...rest} />
    </div>
  );
}

export default Input;
