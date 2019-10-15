import {authAPI, usersAPI} from "../API/api";
import {stopSubmit} from "redux-form"
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
                ...state, ...action.data
            }
        }
    }


    return state
}

export const setUserData = (id, email,login, isAuth) => ({type:SET_USER_DATA, data: {id, email,login, isAuth}})


export const authMeThunkCreator = () => (dispatch) => {
      return usersAPI.authMe()
            .then(response => {
                    debugger
                    if (response.data.resultCode === 0) {

                        dispatch(setUserData(response.data.data.id, response.data.data.login, response.data.data.email, true))
                    }
                }
            )

    }


export const loginThunk = (email, password,rememberMe) => {
   debugger
    return (dispatch) => {
        authAPI.loginMe (email, password,rememberMe)
            .then(response => {
                debugger
                    if (response.data.resultCode === 0) {
                        dispatch(authMeThunkCreator())
                    } else {dispatch(stopSubmit("login",{_error:"Wrong email or password"}))}
                }
            )
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(authMeThunkCreator(null, null, null, false))
                    }
                }
            )
    }
}


