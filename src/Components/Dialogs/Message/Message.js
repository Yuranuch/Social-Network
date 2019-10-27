import React from "react"
import styles from "./Message.module.css"

const Message = (props) => {
    return (
        <div className={styles.message}>
            <span>{props.id} </span>
            <span>{props.message}</span>
        </div>
    )
}
export default Message

