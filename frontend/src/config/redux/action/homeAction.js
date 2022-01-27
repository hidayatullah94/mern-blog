import Axios from "axios";

export const setDataBlog = (page) => {
  return (dispatch) => {
    Axios.get(`http://localhost:4000/blog/posts?page=${page}`)
      .then((result) => {
        const responseApi = result.data;
        dispatch({
          type: "DATA_BLOG",
          payload: responseApi.data,
        }); // data untuk blog

        dispatch({
          type: "UPDATE_PAGE",
          payload: {
            currentPage: responseApi.curren_Page,
            totalPage: Math.ceil(responseApi.total_Item / responseApi.per_Page),
          }, // mat.ceil digunkaan untuk pembulatan
        }); //data untuk perubahan page
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
