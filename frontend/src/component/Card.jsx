import React from "react";
import "../style/main.scss";
import * as icons from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";

function Card(props) {
  const navigate = useHistory();
  const { image, title, autor, date, content, id, onDelete } = props;

  return (
    <div>
      <div className="card">
        <img src={image} alt="Blog-post" className="img-card" />
        <h4 className="title-card">{title}</h4>
        <div className="autors">
          <p className="autor">{autor}</p>
          <p className="date">{date}</p>
          <span className="info" onClick={() => navigate.push(`/detail/${id}`)}>
            <icons.InfoCircle />
          </span>
          <span className="delete" onClick={() => onDelete(id)}>
            <icons.Trash />
          </span>
        </div>
        <p className="content">{content}</p>
      </div>
    </div>
  );
}

export default Card;
