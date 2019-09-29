import React from 'react';
import Post from "./Post/Post";



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



export default MyPosts;

