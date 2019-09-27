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
                <Post message="Hi" likes="15"/>
                <Post message="Hello" likes="5"/>
                <Post message="Good" likes="0"/>
            </div>
        </div>
    );

}

export default MyPosts;

