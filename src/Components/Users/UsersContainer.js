import React from "react"
import {connect} from "react-redux";
import {
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    userFollow,
    userUnFollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import preloader from "./../../assets/images/giphy.gif"
import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        if(this.props.users.length===0) {
            this.props.toggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.toggleIsFetching(false)
                        this.props.setUsers(response.data.items)
                        this.props.setTotalCount(response.data.totalCount)
                    }
                )
        }
    }


    onSelectPage=(pageNumber)=> {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response=> {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    render = () => {

        return <>
            {this.props.isFetching?<Preloader/>:null}
            <Users {...this.props} onSelectPage={this.onSelectPage}/>
            </>


    }
}

const mapStateToProps=(state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(UsersContainer)

