import React from "react"
import {connect} from "react-redux";
import {userFollow, userUnFollow} from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps=(state) => {
    return {
        users: state.usersPage.users

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userFollow: (userId) => {
            dispatch(userFollow(userId))
        },
        userUnFollow: (userId) => {
            dispatch(userUnFollow(userId))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users)

