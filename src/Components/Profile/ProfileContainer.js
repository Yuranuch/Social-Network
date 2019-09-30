import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
   let userId=this.props.match.params.userId
        if(!userId){
            userId=2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId,
            {withCredentials:true, headers:{"API-KEY":"2712bbc4-99c4-4494-954c-6bd0564807d4"}})
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