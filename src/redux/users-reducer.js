export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"

const initialState = {
    users: [
        {id: 0, userName: "Yura", follow: false, status: "I'm a boss", location: {city: "Minsk"}},
        {id: 1, userName: "Sasha", follow: false, status: "I'm a boss too", location: {city: "Brest"}},
        {id: 2, userName: "Andrey", follow: false, status: "I'm a boss", location: {city: "Vitebsk"}},
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
    }
    return state
}

export const UserFollow = (userId) => ({type: FOLLOW, userId})
export const UserUnFollow = (userId) => ({type: UNFOLLOW, userId})



