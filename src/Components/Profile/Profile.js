import React from 'react';
import '../../App.css';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile =()=> {

    return (
        <div>
            <img src="http://www.radionetplus.ru/uploads/posts/2013-04/1365401196_teplye-oboi-1.jpeg"/>
            <div>
                Avatar+description
            </div>
            <MyPosts/>
        </div>
    );

}

export default Profile;

