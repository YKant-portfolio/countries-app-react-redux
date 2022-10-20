import { combineReducers } from "redux";
import { themeReduser } from "./theme/theme-reducer";

export const rootReducer = combineReducers({
	theme: themeReduser,
});