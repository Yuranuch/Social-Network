import React from "react"
import Post from "./Post/Post"
import {Field, reduxForm} from "redux-form"
import {Textarea} from "../../common/FormsControls/FormsControls"
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators"
import styles from "./MyPosts.module.css"

const MyPosts = (props) => {
    const postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}
                                                         id={props.nextPostId}/>)

    const addNewPost = (value) => {
        props.addNewPost(value.newPostText)
    }
    return (
        <div>
            <div className={styles.hint}>
                create new post
            </div>
            <AddNewPostTextReduxForm onSubmit={addNewPost}/>
            <div>
                {postsElements}
            </div>
        </div>
    )
}
const maxLength10 = maxLengthCreator(100)

const AddNewPostText = (props) => {
    return (
        <div className={styles.changePost}>
            <form onSubmit={props.handleSubmit}>
                <Field
                    component={Textarea}
                    name={"newPostText"}
                    validate={[requiredField, maxLength10]}
                />
                <div>
                    <button className={styles.reusedButton}>Add Post</button>
                </div>
            </form>
        </div>
    )
}

const AddNewPostTextReduxForm = reduxForm({form: 'addNewPost'})(AddNewPostText)

export default MyPosts

