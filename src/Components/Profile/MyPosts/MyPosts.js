import React from 'react';
import Post from "./Post/Post";
import {connect} from "react-redux";


const MyPosts =()=> {
    const PostsData = [
        {message:"Hi to all", likesCount: 15},
        {message:"Hello", likesCount: 5},
        {message:"Good", likesCount: 0}
    ]
    const postsElements = PostsData.map(p=><Post message={p.message} likesCount={p.likesCount}/>)

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
    return {

    }
}


const MyPostsContainer = connect (mapStateToProps)(MyPosts)

export default MyPostsContainer;

