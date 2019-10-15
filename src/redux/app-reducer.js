import {authMeThunkCreator} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

const initialState = {
    initialized: false
}

export const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            debugger
            return {
                ...state,
                initialized: true
            }
    }
    return state
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializedApp = () => (dispatch) => {
    debugger
    let promise = dispatch(authMeThunkCreator())
    debugger
    Promise.all([promise])
        .then (() => {
        debugger
        dispatch(initializedSuccess())
    })


}