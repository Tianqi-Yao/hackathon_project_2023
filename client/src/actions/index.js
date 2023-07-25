import Actions from "../constants";

const addCounter = (payload = 1) => ({
  type: Actions.ADD_COUNT,
  payload,
});

const minusCounter = (payload = 1) => ({
  type: Actions.MINUS_COUNT,
  payload,
});

const updateRestaurantList = (payload) => ({
  type: Actions.UPDATE_RESTAURANT_LIST,
  payload,
});


export const actions = {
  addCounter,
  minusCounter,
  updateRestaurantList,
};
