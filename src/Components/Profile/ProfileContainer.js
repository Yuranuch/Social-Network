import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {setUserProfile} from "../../API/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
   let userId=this.props.match.params.userId
        if(!userId){
            userId=2
        }
        setUserProfile(userId)
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