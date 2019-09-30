export const SET_USER_DATA = "SET_USER_DATA"


const initialState = {
    id: null,
    login: null,
    email: null,
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

export const setUserData = (id, login, email) => ({type:SET_USER_DATA, data: {id, login, email}})