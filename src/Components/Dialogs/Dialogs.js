import React from "react"
import "../../App.css"
import styles from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem"
import Message from "./Message/Message"
import {Field, reduxForm} from "redux-form"
import {maxLengthCreator, requiredField} from "../../utils/validators/validators"
import {Textarea} from "../common/FormsControls/FormsControls"

const Dialogs = (props) => {

    const onAddNewMessage = (value) => {
        props.addNewMessage(value.newMessage)
    }

    const dialogsElements = props.dialogsData.map(d => <DialogsItem id={d.id} name={d.name}/>)
    const messageElements = props.messageData.map(m => <Message id={m.id} message={m.message}/>)

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
                <AddMessageReduxForm onSubmit={onAddNewMessage}/>
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10)

export default Dialogs

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder={"Enter you message"}
                name={"newMessage"}
                component={Textarea}
                validate={[requiredField, maxLength10]}
            />
            <div>
                <button>Send new message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'addMessage'})(AddMessageForm)