const initialState = {
  images: [],
  visibleImages: [],
  cart: [],
  users: [],
  loggedUser: "",
};

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IMAGES":
      return {
        ...state,
        images: action.payload,
      };
    default:
      return state;
  }
};

export default homePageReducer;
