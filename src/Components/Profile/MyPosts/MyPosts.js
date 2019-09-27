import React from 'react';
import Post from "./Post/Post";


const MyPosts =()=> {

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
                <Post/>
                <Post/>
            </div>
        </div>
    );

}

export default MyPosts;

