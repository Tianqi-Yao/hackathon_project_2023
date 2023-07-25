import Actions from "../constants";

const initialState = {
  restaurantData: [],
  mapData: {
    radius: 1500,
    inputLocationStr: null,
    userCoordination: {
      latitude: "",
      longitude: "",
    },
  },
  searchInput: null,
  restaurantKeywords: [],
  searchInputKeywords: [],
  displayedRestaurantsData: [],
  count: 1, // test
};

// restaurantData: [
//   ...restaurantData,
//   {
//     id: null,
//     name: null,
//     averageCalorie: null,
//     coordinate: {
//       latitude: "",
//       longitude: "",
//     },
//     menu: [
//       ...menu,
//       {
//         food: "",
//         calorie: null,
//         price: null,
//         ingredients: "",
//         ingredientsList: [
//           ...ingredientsList,
//           {
//             name: null,
//             calorie: null,
//           },
//         ],
//         imgURL: "",
//         reviews: [
//           ...reviews,
//           {
//             username: null,
//             rating: null,
//             review: null,
//             date: null,
//           },
//         ],
//       },
//     ],
//     distance: null,
//     displayAddress: {},
//     categories: [], //categories.title
//     imageURL: "",
//     price: "",
//     rating: null,
//     reviewCount: null,
//     isClosed: null,
//     reviews: [
//       ...reviews,
//       {
//         username: null,
//         rating: null,
//         review: null,
//         date: null,
//       },
//     ],
//   },
// ];

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_COUNT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case Actions.MINUS_COUNT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    case Actions.UPDATE_RESTAURANT_LIST:
      // console.log("UPDATE_RESTAURANT_LIST action.payload: ", action.payload);
      return {
        ...state,
        restaurantData: [...state.restaurantData, ...action.payload],
      };
    default:
      return state;
  }
};

export default homePageReducer;
