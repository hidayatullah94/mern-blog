import React, { useEffect, useState } from "react";
import "../style/detail.scss";
import * as icons from "react-bootstrap-icons";
import Axios from "axios";
import { useHistory, withRouter } from "react-router-dom";

const Detail = (props) => {
  const navigate = useHistory();
  const [data, setData] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    const id = props.match.params.id;
    Axios.get(`http://localhost:4000/blog/post/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);

  if (data.author) {
    return (
      <div className="detail-blog">
        <img className="detail-img" src={`http://localhost:4000/${data.image}`} alt="detail-img" />
        <div className="detail-body">
          <h3 className="detail-title">{data.title}</h3>
          <span className="icon-edit" onClick={() => navigate.push(`/create/${id}`)}>
            <icons.PencilSquare />
          </span>
        </div>
        <div className="detail-autors">
          <p className="detail-autor">{data.author.name}</p>
          <p className="detail-date">{data.createdAt}</p>
        </div>
        <p className="detail-content">{data.content}</p>
      </div>
    );
  }
  return <p>Loading ...</p>;
};

export default withRouter(Detail);
