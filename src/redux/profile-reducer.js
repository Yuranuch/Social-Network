import {profileAPI} from "../API/api";

export const CHANGE_POST_TEXT="CHANGE_POST_TEXT"
export const ADD_NEW_POST ="ADD_NEW_POST"
export const SET_PROFILE = "SET_PROFILE"
export const SET_STATUS = "SET_STATUS"
export const UPDATE_STATUS = "UPDATE_STATUS"

const initialState = {
    postsData : [
        {message:"Hi to all", likesCount: 15},
        {message:"Hello", likesCount: 5},
        {message:"Good", likesCount: 0}
    ],
    nextPostId: 3,
    profile: null,
    status: ""
}

export const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            return {
                ...state,
                postsData : [...state.postsData,{id: state.nextPostId++, message: action.newPostText, likesCount: 15} ],
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
        case UPDATE_STATUS:
            return {
                ...state,
                status: action.status
            }
    }
    return state
}

export const addNewPost = (newPostText) => ({type: ADD_NEW_POST, newPostText})
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

export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode===0){
                    dispatch(setStatus(status))
                }
            })
    }
}





