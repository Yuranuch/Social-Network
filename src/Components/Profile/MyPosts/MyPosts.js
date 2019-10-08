import React from 'react';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";

const MyPosts = (props) => {
    const postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}
                                                         id={props.nextPostId}/>)

    const addNewPost = (value) => {
        props.addNewPost(value.newPostText)
    }
    return (
        <div>
            My Posts
            <AddNewPostTextReduxForm onSubmit={addNewPost}/>
            <div>
                New Posts
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}
const maxLength10 = maxLengthCreator(10)

const AddNewPostText = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name={"newPostText"}
                validate={[requiredField, maxLength10]}
            />
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddNewPostTextReduxForm = reduxForm({form: 'addNewPost'})(AddNewPostText)



export default MyPosts;

