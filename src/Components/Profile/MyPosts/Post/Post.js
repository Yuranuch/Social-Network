import React from 'react';
import styles from './Post.module.css'

const Post = (props) => {

    return (

        <div className={styles.post}>
            <div>Id{props.id} </div>
            <img src="http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg"/>
            <div>{props.message}</div>
            <span>likes {props.likesCount}</span>
        </div>

    );

}

export default Post;

