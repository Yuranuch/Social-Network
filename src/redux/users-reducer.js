export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET_USERS"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

const initialState = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1
}

export const usersReducer = (state=initialState,action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userId) {
                        return {...u, follow: true}
                    }else {return u}
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userId) {
                        return {...u, follow: false}
                    }else {return u}
                })
            }
        }
        case SET_USERS:{
            return{
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.selectedPage
            }
        }
    }
    return state
}

export const userFollow = (userId) => ({type: FOLLOW, userId})
export const userUnFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type:SET_USERS, users})
export const setCurrentPage = (selectedPage) => ({type:SET_CURRENT_PAGE, selectedPage})


