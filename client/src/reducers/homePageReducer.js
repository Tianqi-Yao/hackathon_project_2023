import Actions from "../constants";

const initialState = {
  analyzedRestaurantData: [],
  restaurantData: [],
  mapData: {
    radius: 1500, // 0 - 40000 meters
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
  isSearchingDish: false,
  searchedDishId: [],
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
//         id:null,
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
    case Actions.APPEND_RESTAURANT_LIST:
      // console.log("APPEND_RESTAURANT_LIST action.payload: ", action.payload);
      return {
        ...state,
        restaurantData: [...state.restaurantData, ...action.payload],
      };
    case Actions.APPEND_ANALYZED_RESTAURANT_LIST:
      // console.log("APPEND_ANALYZED_RESTAURANT_LIST action.payload: ", action.payload);
      return {
        ...state,
        analyzedRestaurantData: [
          ...state.analyzedRestaurantData,
          ...action.payload,
        ],
      };
    case Actions.EMPTY_RESTAURANT_LIST:
      return {
        ...state,
        restaurantData: [],
      };
    default:
      return state;
  }
};

export default homePageReducer;
