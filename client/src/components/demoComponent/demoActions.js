import Actions from "../../constants";
import axios from "axios";

const addCounter = (payload = 1) => ({
    type: Actions.ADD_COUNT,
    payload
});

const minusCounter = (payload = 1) => ({
    type: Actions.MINUS_COUNT,
    payload
});

const setUsers = (payload) => ({
    type: Actions.SET_USERS,
    payload
});

const setMyApiData = (payload) => ({
    type: Actions.SET_MY_API_DATA,
    payload
});

// thunk
const getUsers = () => {
    return (dispatch, getState) => {
        const url = "https://jsonplaceholder.typicode.com/users";
        return axios.get(url).then((res) => {
            dispatch(setUsers(res.data));
        });
    };
};

const getMyApi = () => {
    return (dispatch, getState) => {
        const url = "http://localhost:3001/api";
        return axios.get(url).then((res) => {
            console.log(res, "res");
            dispatch(setMyApiData(res.data.message));
        }).catch((err) => {
            console.error(err);
        });
    };
};

export const actions = {
    addCounter,
    minusCounter,
    getUsers,
    getMyApi
};
