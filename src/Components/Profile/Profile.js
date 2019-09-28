import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile =()=> {

    return (
        <div>
            <img src="http://www.radionetplus.ru/uploads/posts/2013-04/1365401196_teplye-oboi-1.jpeg"/>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );

}

export default Profile;

