import React from "react"
import "../../App.css"
import {connect} from "react-redux"
import {addNewMessage} from "../../redux/dialog-reducer"
import Dialogs from "./Dialogs"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const mapStateToProps = (state) => {

    return {
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
        newMessage: state.dialogsPage.newMessage,
        newMessageId: state.dialogsPage.newMessageId,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (newMessage) => {
            dispatch(addNewMessage(newMessage))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)


