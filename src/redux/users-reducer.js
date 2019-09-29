export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET_USERS"

const initialState = {
    users: [
        // {id: 0, photo: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg", userName: "Yura", follow: true, status: "I'm a boss", location: {city: "Minsk"}},
        // {id: 1, photo: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg", userName: "Sasha", follow: false, status: "I'm a boss too", location: {city: "Brest"}},
        // {id: 2, photo: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg", userName: "Andrey", follow: false, status: "I'm a boss", location: {city: "Vitebsk"}},
    ]
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
    }
    return state
}

export const userFollow = (userId) => ({type: FOLLOW, userId})
export const userUnFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type:SET_USERS, users})



