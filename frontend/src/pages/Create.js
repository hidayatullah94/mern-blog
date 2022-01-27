import React, { useEffect, useState } from "react";
import Input from "../component/Input";
import Upload from "../component/Upload";
import Textarea from "../component/Textarea";
import Button from "../component/Button";
import "../style/create.scss";
import Gap from "../component/Gap";
import { useDispatch, useSelector } from "react-redux";
import { setForm, postApi, setPerview, updateApi } from "../config/redux/action";
import { withRouter } from "react-router-dom";
import Axios from "axios";

// ! NOT WORKING

const Create = (props) => {
  //import state from redux
  const { form, imgPreview } = useSelector((state) => state.createReducer);
  const { title, content } = form;
  // state for update
  const [isupdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
      setIsUpdate(true);
      Axios.get(`http://localhost:4000/blog/post/${id}`)
        .then((res) => {
          const result = res.data.data;

          dispatch(setForm("title", result.title));
          dispatch(setForm("content", result.content));
          dispatch(setPerview(`http://localhost:4000/${result.image}`));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dispatch, props]);

  // button for submit
  const onSubmit = () => {
    const id = props.match.params.id;
    if (isupdate) {
      updateApi(form, id);
    } else {
      postApi(form);
    }
  };

  const preview = (e) => {
    let file = e.target.files[0];
    dispatch(setPerview(URL.createObjectURL(file)));
    dispatch(setForm("image", file));
  };

  return (
    <div>
      <div className="create-blog">
        <h3>{isupdate ? "Update" : "Create"}Post Blog</h3>
        <div className="upload-blog">
          <Gap height={20} />
          <Input label="Title" type="text" placeholder="Input title" value={title} onChange={(e) => dispatch(setForm("title", e.target.value))} />
          <Gap height={15} />
          <Upload onChange={(e) => preview(e)} img={imgPreview} />
          <Gap height={15} />
          <Textarea title=" Content" value={content} onChange={(e) => dispatch(setForm("content", e.target.value))} />
          <Gap height={25} />
          <Button title={isupdate ? "Update" : "Save"} width={120} onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Create);
