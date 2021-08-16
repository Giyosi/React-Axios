import { combineReducers } from "redux";
import global from "./globalReducer";
import users from "./usersReducer";
import todos from "./usersReducer";

const reducers = combineReducers({
    global,
    users,
    todos
})

export default reducers;