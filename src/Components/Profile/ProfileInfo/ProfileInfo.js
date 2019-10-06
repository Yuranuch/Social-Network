import React from 'react';
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";


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
            <ProfileStatus
                updateStatus={props.updateStatus}
                status={props.status}
            />
        </div>
    )

}

export default ProfileInfo;

