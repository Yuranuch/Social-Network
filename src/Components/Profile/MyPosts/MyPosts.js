import React from 'react';
import Post from "./Post/Post";
import {connect} from "react-redux";
import {addNewPost, changePostText} from "../../../redux/profile-reducer";



const MyPosts =(props)=> {
    const postsElements = props.postsData.map(p=><Post message={p.message} likesCount={p.likesCount} id={props.nextPostId}/>)

    const addNewPost = () => {
        props.addNewPost()
    }

    const onPostTextChange = (e) => {
        const newText = e.currentTarget.value
        props.changePostText(newText)
    }

    return (
        <div>
            My Posts
            <div>
                <textarea onChange={onPostTextChange} value={props.firstPostValue}/>
                <div>
                     <button onClick={addNewPost}>Add Post</button>
                </div>
            </div>
            <div>
                New Posts
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        firstPostValue: state.profilePage.firstPostValue,
        nextPostId: state.profilePage.nextPostId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost : () => {
          dispatch(addNewPost())
        },
        changePostText: (newText)=> {
            dispatch(changePostText(newText))
        }
    }
}


const MyPostsContainer = connect (mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

