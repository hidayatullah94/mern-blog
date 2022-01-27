import React from "react";
import "../style/main.scss";

function Link({ title, onClick }) {
  return (
    <div>
      <p className="link-page" onClick={onClick}>
        {title}
      </p>
    </div>
  );
}

export default Link;
