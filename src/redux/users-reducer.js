export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET_USERS"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
export const TOGGLE_FOLLOW_PROGRESS = "TOGGLE_FOLLOW_PROGRESS"



const initialState = {
    users: [],
    totalCount: 0,
    pageSize: 20,
    currentPage: 3,
    isFetching: false,
    followInProgress: []
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
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.pageNumber
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case TOGGLE_FOLLOW_PROGRESS:
            return {
                ...state,
                followInProgress: action.followInProgress?
                    [...state.followInProgress, action.userId]
                    :state.followInProgress.filter(id => id != action.userId)
            }

    }
    return state
}

export const userFollow = (userId) => ({type: FOLLOW, userId})
export const userUnFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type:SET_USERS, users})
export const setCurrentPage = (pageNumber) => ({type:SET_CURRENT_PAGE, pageNumber})
export const setTotalCount=(totalCount) => ({type: SET_TOTAL_COUNT,totalCount})
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})

export const toggleFollowProgress = (followInProgress, userId) => ({type: TOGGLE_FOLLOW_PROGRESS, followInProgress, userId})

