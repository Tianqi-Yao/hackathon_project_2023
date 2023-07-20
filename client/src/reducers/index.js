import homePageReducer from "./homePage";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  home: homePageReducer,
});

export default rootReducer;
