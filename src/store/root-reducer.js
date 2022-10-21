import { combineReducers } from "redux";
import { themeReduser } from "./theme/theme-reducer";
import { countriesReducer } from "./countries/countries-reducer";

export const rootReducer = combineReducers({
	theme: themeReduser,
	countries: countriesReducer,
});