import React from "react"
import {connect} from "react-redux";
import {
    followMeThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    setTotalCount,
    setUsers, toggleFollowProgress,
    toggleIsFetching, unfollowMeThunkCreator,
    userFollow,
    userUnFollow
} from "../../redux/users-reducer";

import Users from "./Users";
import Preloader from "../common/preloader/preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        }
    }

    onSelectPage = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render = () => {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users {...this.props}
                   toggleFollowProgress={this.props.toggleFollowProgress}
                   unfollowMeThunkCreator={this.props.unfollowMeThunkCreator}
                   followMeThunkCreator={this.props.followMeThunkCreator}
                   onSelectPage={this.onSelectPage}
            />
        </>


    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollowProgress: (progress, userId) => {
            dispatch(toggleFollowProgress(progress, userId))
        },
        getUsersThunkCreator: (currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        },
        unfollowMeThunkCreator: (userId) => {
            dispatch(unfollowMeThunkCreator(userId))
        },
        followMeThunkCreator: (userId) => {
            dispatch(followMeThunkCreator(userId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

