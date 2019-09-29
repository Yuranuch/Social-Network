import React from 'react';
import '../../App.css';
import styles from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {connect} from "react-redux";
import {addNewMessage, changeMessage} from "../../redux/dialog-reducer";

const Dialogs =(props)=> {

    const onAddNewMessage = () => {
        props.addNewMessage()
    }

    const onChangeMessage = (e) => {
        let newMessageText = e.currentTarget.value
        props.changeMessage(newMessageText)
    }

    const dialogsElements = props.dialogsData.map(d => <DialogsItem id={d.id} name={d.name}/>)
    const messageElements = props.messageData.map (m=> <Message id={m.id} message={m.message} />)

    return (
        <div>
        <div className={styles.dialogs}>
           <div className={styles.dialogs_items}>
               {dialogsElements}
           </div>

            <div className={styles.messages}>
                {messageElements}
            </div>

        </div>
            <div>
                <textarea value={props.newMessage} onChange={onChangeMessage}/>
                <div>
                    <button onClick={onAddNewMessage}>Send new message</button>
                </div>
            </div>
        </div>
    );
}

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

const DialogContainer = connect (mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogContainer;

