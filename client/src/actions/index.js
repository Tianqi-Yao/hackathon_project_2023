import Actions from "../constants";

const addCounter = (payload = 1) => ({
  type: Actions.ADD_COUNT,
  payload,
});

const minusCounter = (payload = 1) => ({
  type: Actions.MINUS_COUNT,
  payload,
});

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

export const actions = {
  addCounter,
  minusCounter,
  appendRestaurantList,
  appendAnalyzedRestaurantList,
  emptyRestaurantList,
};
