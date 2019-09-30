import React from "react"
import {connect} from "react-redux";
import {setCurrentPage, setTotalCount, setUsers, userFollow, userUnFollow} from "../../redux/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";

const mapStateToProps=(state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage. currentPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userFollow: (userId) => {
            dispatch(userFollow(userId))
        },
        userUnFollow: (userId) => {
            dispatch(userUnFollow(userId))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch (setCurrentPage(pageNumber))
        },
        setTotalCount: (totalCount)=> {
            dispatch(setTotalCount(totalCount))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

