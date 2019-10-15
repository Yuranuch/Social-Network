import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import {appReducer} from "./app-reducer";

const reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    initial: appReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store


