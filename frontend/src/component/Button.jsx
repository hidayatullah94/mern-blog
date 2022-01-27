import React from "react";
import "../style/main.scss";

function Button({ title, width, height, ...rest }) {
  return (
    <button {...rest} className="btn" style={{ width, height }}>
      {title}
    </button>
  );
}

export default Button;
