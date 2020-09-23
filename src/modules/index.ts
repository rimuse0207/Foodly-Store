import { combineReducers } from "redux";
import getData from "./data";
const rootReducer = combineReducers({ getData });
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
