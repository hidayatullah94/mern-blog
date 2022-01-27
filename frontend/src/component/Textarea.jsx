import React from "react";

function Textarea({ title, ...rest }) {
  return (
    <div className="text-area">
      <label htmlFor="textareaPost">{title}</label>
      <textarea {...rest} name="textareaPost" id="textareaPost"></textarea>
    </div>
  );
}

export default Textarea;
