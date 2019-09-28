import React from 'react';
import '../../App.css';
import styles from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";

const Dialogs =(props)=> {

    let dialogsItems = [
        {id: 0, name: "Yura"},
        {id: 1, name: "Genya"},
        {id: 2, name: "Natasha"}
    ]
    const DialogsElements = dialogsItems.map(d => <DialogsItem id={d.id} name={d.name}/>)

    return (
        <div className={styles.dialogs}>
           <div className={styles.dialogs_items}>
               {DialogsElements}
           </div>




            <div className={styles.messages}>
                <div className={styles.message}>
                    Hello
                </div>
                <div className={styles.message}>
                    Hello haw are you&
                </div>
                <div className={styles.message}>
                    I am fine
                </div>

            </div>
        </div>
    );
}

export default Dialogs;

