// “redux”包，只完成redux本身的功能
import { createStore, applyMiddleware, combineReducers } from "redux";
// 导入自己创建的reducer
import demoReducers from "./components/demoComponent/demoReducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    demoReducers
});

// 创建store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
