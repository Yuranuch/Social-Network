import {profileAPI} from "../API/api";

export const CHANGE_POST_TEXT="CHANGE_POST_TEXT"
export const ADD_NEW_POST ="ADD_NEW_POST"
export const SET_PROFILE = "SET_PROFILE"
export const SET_STATUS = "SET_STATUS"

const initialState = {
    postsData : [
        {message:"Hi to all", likesCount: 15},
        {message:"Hello", likesCount: 5},
        {message:"Good", likesCount: 0}
    ],
    firstPostValue: "post me",
    nextPostId: 3,
    clearMessage: "",
    profile: null,
    status: ""
}

export const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            return {
                ...state,
                postsData : [...state.postsData,{id: state.nextPostId++, message: state.firstPostValue, likesCount: 15} ],
                firstPostValue: state.clearMessage
            }
        }
        case CHANGE_POST_TEXT: {
            return {
                ...state,
                firstPostValue: action.newText
            }
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
    }
    return state
}

export const addNewPost = () => ({type: ADD_NEW_POST})
export const changePostText = (newText) => ({type:CHANGE_POST_TEXT, newText})
export const setProfile = (profile) => ({type:SET_PROFILE, profile})
export const setStatus = (status) => ({type:SET_STATUS, status})

//ThunkCreator


export const setUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.setUserProfile(userId)
            .then(response => {
                    dispatch(setProfile(response.data))
                }
            )
    }

}





export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}




