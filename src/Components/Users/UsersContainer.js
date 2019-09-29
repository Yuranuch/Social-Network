import React from "react"
import {connect} from "react-redux";
import {userFollow, userUnFollow} from "../../redux/users-reducer";
import Users from "./Users";

// const Users =(props) => {
//
//     let onFollowMe = (userId) => {
//         props.userFollow(userId)
//     }
//     let onUnFollowMe = (userId) => {
//         props.userUnFollow(userId)
//     }
//
//     return <div className={styles.usersWrap}>{
//                 props.users.map(u => <div key={u.id} className={styles.user}>
//                     <div><img src={u.photo}/></div>
//                     <div>{u.userName}</div>
//                     <div>{u.status}</div>
//                     {!u.follow?<button onClick={()=> {onFollowMe(u.id)}}>Follow</button>:
//                     <button onClick={()=> {onUnFollowMe(u.id)}}>UnFollow</button>}
//
//                 </div> )}
//
//     </div>
// }

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

