// state input dari form

const initialCreate = {
  form: {
    title: "",
    image: "",
    content: "",
  },
  imgPreview: null,
};

//setstate dari form

const createReducer = (state = initialCreate, action) => {
  // fungsi untuk form data

  if (action.type === "SET_FORM") {
    return {
      ...state,
      form: {
        // untuk validasi inputan agar tdk kosong
        ...state.form,
        [action.formType]: action.formValue,
      },
    };
  }
  // fungsi untuk img preview
  if (action.type === "SET_PREVIEW") {
    return {
      ...state,
      imgPreview: action.payload,
    };
  }
  return state;
};

export default createReducer;
