


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
    ]
}

export const dialogReducer = (state=initialState,action) => {

    return {state}
}