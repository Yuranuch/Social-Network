import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile =(props)=> {

    return (
        <div>
            <div className="contentHead">
                <img src="http://www.radionetplus.ru/uploads/posts/2013-04/1365401196_teplye-oboi-1.jpeg"/>
            </div>

            <ProfileInfo
                status={props.status}
                profile={props.profile}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;

