import homePageReducer from "./homePageReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  home: homePageReducer,
});

export default rootReducer;
