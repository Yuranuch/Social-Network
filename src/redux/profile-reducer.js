export const CHANGE_POST_TEXT="CHANGE_POST_TEXT"
export const ADD_NEW_POST ="ADD_NEW_POST"

const initialState = {
    postsData : [
        {message:"Hi to all", likesCount: 15},
        {message:"Hello", likesCount: 5},
        {message:"Good", likesCount: 0}
    ],
    firstPostValue: "post me"
}

export const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            return {
                ...state,
                postsData : [...state.postsData,{message: state.firstPostValue, likesCount: 15} ]
            }
        }
        case CHANGE_POST_TEXT: {
            return {
                ...state,
                firstPostValue: action.newText
            }
        }


    }
    return state
}

export const addNewPost = () => ({type: ADD_NEW_POST})
export const changePostText = (newText) => ({type:CHANGE_POST_TEXT, newText})