import React from 'react';
import Post from "./Post/Post";
import {connect} from "react-redux";


const MyPosts =(props)=> {
    const postsElements = props.postsData.map(p=><Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div>
            My Posts
            <div>
                <textarea/>
                <div>
                     <button>Add Post</button>
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
    debugger
    return {
        postsData: state.profilePage.state.postsData
    }
}


const MyPostsContainer = connect (mapStateToProps)(MyPosts)

export default MyPostsContainer;

