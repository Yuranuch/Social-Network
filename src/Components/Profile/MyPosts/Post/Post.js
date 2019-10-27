import React from "react"
import styles from "./Post.module.css"

const Post = (props) => {

    return (
        <div className={styles.postWrap}>
            <div className={styles.post}>
                {/*<div>Id{props.id} </div>*/}
                <div className={styles.postItem}>
                    <img src="http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg"/>
                </div>
                <div className={styles.message}>{props.message}</div>
            </div>
            <span className={styles.likes}>likes {props.likesCount}</span>
        </div>
    )
}

export default Post

