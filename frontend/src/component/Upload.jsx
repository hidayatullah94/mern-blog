import React from "react";

function Upload({ img, ...rest }) {
  return (
    <div className="upload">
      {img && <img src={img} alt="upload" className="img-upload" />}
      <input type="file" accept="image/*" {...rest} />
    </div>
  );
}

export default Upload;
