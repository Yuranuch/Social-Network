import {authAPI, usersAPI} from "../API/api";

export const SET_USER_DATA = "SET_USER_DATA"


const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state=initialState, action)=>{
    switch (action.type) {
        case SET_USER_DATA:{
            return {
                ...state, ...action.data,
                isAuth: true
            }
        }
    }


    return state
}

export const setUserData = (id, login, email) => ({type:SET_USER_DATA, data: {id, login, email}})


export const authMeThunkCreator = () => {
    return (dispatch) => {
        usersAPI.authMe()
            .then(response => {
                    if (response.data.resultCode === 0) {
                        let {id, login, email} = response.data.data
                        dispatch(setUserData(id, login, email))
                    }
                }
            )
    }
}

export const login = (email, password,rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password,rememberMe)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(authMeThunkCreator())
                    }
                }
            )
    }
}

