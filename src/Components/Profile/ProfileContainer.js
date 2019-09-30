import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
    debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
    const mapStateToProps =(state)=> {
        return {
            profile: state.profilePage.profile
        }
    }
    const mapDispatchToProps =(dispatch)=> {
        return {
            setProfile: (profile) => {

                dispatch(setProfile(profile))
            }
        }
    }

    const WithUrlContainerComponent = withRouter(ProfileContainer)
    export default connect (mapStateToProps, mapDispatchToProps)(WithUrlContainerComponent)