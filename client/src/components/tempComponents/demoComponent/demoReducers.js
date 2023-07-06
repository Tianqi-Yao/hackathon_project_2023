import Actions from "../../../constants";

const initialState = {
    count: 1,
    name: "Sam",
    users: [],
    myApiData: "no data"
};

// reducer是pure function, 不可以有异步操作
const demoReducers = (state = initialState, action = {}) => {
    switch (action.type) {
        case Actions.ADD_COUNT:
            return {
                ...state,
                count: state.count + action.payload
            };
        case Actions.MINUS_COUNT:
            return {
                ...state,
                count: state.count - action.payload
            };
        case Actions.SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.payload]
            };
        case Actions.SET_MY_API_DATA:
            return {
                ...state,
                myApiData: action.payload
            };

        default:
            return { ...state };
    }
};

export default demoReducers;
