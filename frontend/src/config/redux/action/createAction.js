import Axios from "axios";
//isi action form
export const setForm = (formType, formValue) => {
  return { type: "SET_FORM", formType, formValue };
};

// isi action img preview
export const setPerview = (payload) => {
  return { type: "SET_PREVIEW", payload };
};

// ISI action API

export const postApi = (form) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("image", form.image);
  data.append("content", form.content);

  Axios.post("http://localhost:4000/blog/post", data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  })
    .then((res) => {
      console.log("succes create data ", res);
    })
    .catch((err) => {
      console.log(err);
    });
  alert("Data berhasil ditambahkan ");
};

export const updateApi = (form, id) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("image", form.image);
  data.append("content", form.content);

  Axios.put(`http://localhost:4000/blog/post/${id}`, data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  })
    .then((res) => {
      console.log("succes create data ", res);
    })
    .catch((err) => {
      console.log(err);
    });
  alert("Data berhasil diUpdate ");
};
