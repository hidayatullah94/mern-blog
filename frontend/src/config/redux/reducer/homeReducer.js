//REDUCER HOME
// data state
const initialHome = {
  dataBlog: [], //state di home
  page: {
    currentPage: 1,
    totalPage: 1,
  },
};

// fungsi setstate
const homeReducer = (state = initialHome, action) => {
  // untuk merubah kondisi state
  if (action.type === "DATA_BLOG") {
    return {
      ...state, // copy state yang sebelumnya
      dataBlog: action.payload, // payload sama dengn value
    };
  }
  if (action.type === "UPDATE_PAGE") {
    return {
      ...state,
      page: action.payload,
    };
  }
  return state;
};

export default homeReducer;
