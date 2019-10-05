import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {setUserProfile, usersAPI} from "../../API/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        usersAPI.setUserProfile(userId)
            .then(response => {
                    this.props.setProfile(response.data)
                }
            )
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (profile) => {

            dispatch(setProfile(profile))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)