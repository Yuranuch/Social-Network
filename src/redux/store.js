
import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";

const reducers=combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
})

const store = createStore(reducers)

// state = {
//     ProfilePage: {
//         PostsData : [
//             {message:"Hi to all", likesCount: 15},
//             {message:"Hello", likesCount: 5},
//             {message:"Good", likesCount: 0}
//         ],
//     },
//     DialogPage: {
//         DialogsData : [
//             {id: 0, name: "Yura"},
//             {id: 1, name: "Genya"},
//             {id: 2, name: "Natasha"}
//         ],
//         MessageData : [
//             {id: 0, message: "Hi"},
//             {id: 1, message: "Hello all"},
//             {id: 2, message: "How are you?"}
//         ]
//     },
//     SideBar: {
//
//     }
// }


export default store


