import React from "react"
import {connect} from "react-redux";

const Users =(props) => {

    return <div>{
                props.users.map(u =><div>{u.userName}</div>
            )}
        </div>

}

const mapStateToProps=(state) => {
    return {
        users: state.usersPage.users
    }
}

const UsersContainer = connect (mapStateToProps,null)(Users)

export default UsersContainer