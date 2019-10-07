export const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE"
export const CHANGE_MESSAGE = "CHANGE_MESSAGE"


const initialState = {
    dialogsData: [
        {id: 0, name: "Yura"},
        {id: 1, name: "Genya"},
        {id: 1, name: "Genya"},
        {id: 1, name: "Genya"},
        {id: 2, name: "Natasha"}
    ],
    messageData: [
        {id: 0, message: "Hi"},
        {id: 1, message: "Hello all"},
        {id: 2, message: "How are you?"}
    ],

    newMessageId: 3,

}

export const dialogReducer = (state=initialState,action) => {
        switch (action.type) {
            case ADD_NEW_MESSAGE: {
                return {
                    ...state,
                    messageData: [...state.messageData, {id: state.newMessageId++, message: action.newMessage}],
                }
            }
        }
    return state
}

export const addNewMessage =(newMessage)=> ({type:ADD_NEW_MESSAGE, newMessage})
