import React from 'react';
import '../../App.css';
import styles from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {connect} from "react-redux";

const Dialogs =(props)=> {

    // let DialogsData = [
    //     {id: 0, name: "Yura"},
    //     {id: 1, name: "Genya"},
    //     {id: 2, name: "Natasha"}
    // ]
    // let MessageData = [
    //     {id: 0, message: "Hi"},
    //     {id: 1, message: "Hello all"},
    //     {id: 2, message: "How are you?"}
    // ]


    const dialogsElements = props.dialogsData.map(d => <DialogsItem id={d.id} name={d.name}/>)
    const messageElements = props.messageData.map (m=> <Message id={m.id} message={m.message} />)
    return (
        <div className={styles.dialogs}>
           <div className={styles.dialogs_items}>
               {dialogsElements}
           </div>

            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
    );
}

const mapStateToProps =(state)=> {

    return{
        dialogsData: state.dialogsPage.state.dialogsData,
        messageData: state.dialogsPage.state.messageData
    }
}

const DialogContainer = connect (mapStateToProps,null)(Dialogs)

export default DialogContainer;

