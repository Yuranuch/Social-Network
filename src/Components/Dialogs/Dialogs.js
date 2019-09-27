import React from 'react';
import '../../App.css';
import styles from './Dialogs.module.css'

const Dialogs =(props)=> {
    return (
        <div className={styles.dialogs}>
           <div className={styles.dialogs_items}>
               <div className={styles.dialog}>
                    Yura
               </div>
               <div className={styles.dialog}>
                    Natasha
               </div>
               <div className={styles.dialog}>
                   Genya
               </div>

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

