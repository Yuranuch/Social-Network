import React from 'react';
import styles from './Post.module.css'

const Post = (props) => {

    return (

        <div className={styles.post}>
            <img src="http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg"/>
            <div>{props.message}</div>
            <span>likes {props.likes}</span>
        </div>

    );

}

export default Post;

