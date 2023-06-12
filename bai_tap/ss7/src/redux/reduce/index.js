import {combineReducers} from "redux";
import userManagementReducer from "./userReducer";
export const rootReducer=combineReducers({
    users:userManagementReducer
})
