

const initialState = {
    postsData : [
        {message:"Hi to all", likesCount: 15},
        {message:"Hello", likesCount: 5},
        {message:"Good", likesCount: 0}
    ]
}

export const profileReducer = (state=initialState, action) => {
    return {state}
}