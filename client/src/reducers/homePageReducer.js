import Actions from "../constants";

const initialState = {
  analyzedRestaurantData: [],
  restaurantData: [],
  userAddress: "",
  userGeometry: {},
  mapData: {
    radius: 1500, // 0 - 40000 meters
    inputLocationStr: "",
    userCoordination: {
      latitude: "",
      longitude: "",
    },
  },
  searchInput: "",
  restaurantKeywords: [],
  searchInputKeywords: [],
  displayedRestaurantsData: [],
  searchedDishId: [{ "0e19bf86-3baf-4abf-ab2c-42596d725e1b": 20 }], // data inside for testing
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
    case Actions.APPEND_RESTAURANT_LIST:
      // console.log("APPEND_RESTAURANT_LIST action.payload: ", action.payload);
      return {
        ...state,
        restaurantData: [...state.restaurantData, ...action.payload],
      };
    case Actions.APPEND_ANALYZED_RESTAURANT_LIST:
      console.log("APPEND_ANALYZED_RESTAURANT_LIST action.payload: ", action.payload);
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
    case Actions.GET_INPUT_LOCATION:
      return {
        ...state,
        mapData: {
          ...state.mapData,
          inputLocationStr: action.payload,
        },
      };
    case Actions.GET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload,
      };
    case Actions.SET_RADIUS:
      return {
        ...state,
        mapData: {
          ...state.mapData,
          radius: action.payload,
        },
      };
    case Actions.APPEND_MEET_USER_DATA:
      return {
        ...state,
        searchedDishId: action.payload,
      };
    case Actions.SET_USER_ADDRESS:
      return {
        ...state,
        userAddress: action.payload,
      };
    case Actions.SET_USER_GEOMETRY_DATA:
      return {
        ...state,
        userGeometry: action.payload,
      };
    default:
      return state;
  }
};

export default homePageReducer;
