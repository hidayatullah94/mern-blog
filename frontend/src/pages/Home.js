import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import "../style/home.scss";
import Button from "../component/Button";
import Gap from "../component/Gap";
import { useDispatch, useSelector } from "react-redux";
import { setDataBlog } from "../config/redux/action/homeAction";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Axios from "axios";

const Home = (props) => {
  // import state global
  // buat object distructur
  const [counter, setCounter] = useState(1);
  const { dataBlog, page } = useSelector((state) => state.homeReducer); //selector untuk memilih state
  const dispatch = useDispatch(); // sebagai ganti setState /untuk merubah data
  //for current page
  useEffect(() => {
    dispatch(setDataBlog(counter));
    //parameter harus dipanggil lagi didalam array (dispatch)
  }, [counter, dispatch]); // isi array dengan data dispatch

  //button pignation
  const previus = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };
  //ALERT TO DELETED
  const alertDelete = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Apakah anda ingin menghapus data ?",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            Axios.delete(`http://localhost:4000/blog/post/${id}`)
              .then((res) => {
                dispatch(setDataBlog(counter));
                alert("Data Berhasil dihapus ");
              })
              .catch((err) => console.log(err)),
        },
        {
          label: "No",
          onClick: () => alert("Data tidak dihapus"),
        },
      ],
    });
  };

  return (
    <div className="home-page">
      <div className="content-blog">
        {dataBlog.map((blog) => {
          return <Card key={blog._id} image={`http://localhost:4000/${blog.image}`} title={blog.title} autor={blog.author.name} date={blog.createdAt} content={blog.content} id={blog._id} onDelete={alertDelete} />;
        })}
      </div>
      <div className="pignation">
        <Button title="Previus" width={100} onClick={previus} />

        <Gap width={30} />
        <p className="page-pignation">
          {page.currentPage} / {page.totalPage}
        </p>
        <Gap width={30} />
        <Button title="Next" width={100} onClick={next} />
      </div>
      <Gap height={150} />
    </div>
  );
};

export default Home;
