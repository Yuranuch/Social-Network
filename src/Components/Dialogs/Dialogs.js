import React from 'react';
import '../../App.css';
import styles from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs =(props)=> {

    let dialogsItems = [
        {id: 0, name: "Yura"},
        {id: 1, name: "Genya"},
        {id: 2, name: "Natasha"}
    ]
    let PostsData = [
        {id: 0, message: "Hi"},
        {id: 1, message: "Hello all"},
        {id: 2, message: "How are you?"}
    ]




    const dialogsElements = dialogsItems.map(d => <DialogsItem id={d.id} name={d.name}/>)
    const messageElements = PostsData.map (m=> <Message id={m.id} message={m.message} />)
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

export default Dialogs;

