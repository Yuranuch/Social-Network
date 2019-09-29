import React from 'react';
import '../../App.css';
import {connect} from "react-redux";
import {addNewMessage, changeMessage} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";


const mapStateToProps =(state)=> {

    return{
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
        newMessage: state.dialogsPage.newMessage,
        newMessageId: state.dialogsPage.newMessageId
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: ()=> {
            dispatch(addNewMessage())
        },
        changeMessage: (newMessageText) => {
            dispatch(changeMessage(newMessageText))
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Dialogs)


