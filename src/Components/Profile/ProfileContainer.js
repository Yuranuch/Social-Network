import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunkCreator, setProfile, setStatus, setUserProfileThunkCreator} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {profileAPI, setUserProfile, usersAPI} from "../../API/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.setProfile(userId)
        // profileAPI.setUserProfile(userId)
        //     .then(response => {
        //             this.props.setProfile(response.data)
        //         }
        //     )


        this.props.getStatus(userId)
    }

    render() {
        return (

            <Profile {...this.props}
                     status={this.props.status}
                     profile={this.props.profile}
            />
        )
    }
}

const mapStateToProps = (state) => {
debugger
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (profile) => {
            dispatch(setUserProfileThunkCreator(profile))
        },
        getStatus: (userId) => {
            dispatch(getStatusThunkCreator(userId))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)