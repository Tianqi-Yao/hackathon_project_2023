import Actions from "../constants";

const appendRestaurantList = (payload) => ({
  type: Actions.APPEND_RESTAURANT_LIST,
  payload,
});

const appendAnalyzedRestaurantList = (payload) => ({
  type: Actions.APPEND_ANALYZED_RESTAURANT_LIST,
  payload,
});

const emptyRestaurantList = () => ({
  type: Actions.EMPTY_RESTAURANT_LIST,
});

const getInputLocation = (payload) => ({
  type: Actions.GET_INPUT_LOCATION,
  payload,
});

const getSearchInput = (payload) => ({
  type: Actions.GET_SEARCH_INPUT,
  payload,
});

const setRadius = (payload) => ({
  type: Actions.SET_RADIUS,
  payload,
});

export const actions = {
  appendRestaurantList,
  appendAnalyzedRestaurantList,
  emptyRestaurantList,
  getInputLocation,
  getSearchInput,
  setRadius,
};
