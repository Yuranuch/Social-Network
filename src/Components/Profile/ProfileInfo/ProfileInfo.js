import React from 'react';
import Preloader from "../../common/preloader/preloader";


const ProfileInfo = (props) => {
    if (props.profile===null) {
       return <Preloader/>
    }
    return (
        <div>
            Avatar+description

            <div>
                <img src={props.profile.photos.large} />
            </div>
            <ProfileStatus/>
        </div>
    )

}

export default ProfileInfo;

