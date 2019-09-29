import React from "react"
import styles from './Users.module.css'
const Users =(props) => {
    let onFollowMe = (userId) => {
        props.userFollow(userId)
    }
    let onUnFollowMe = (userId) => {
        props.userUnFollow(userId)
    }

    return <div className={styles.usersWrap}>{
                props.users.map(u => <div key={u.id} className={styles.user}>
                    <div><img src={u.photo}/></div>
                    <div>{u.userName}</div>
                    <div>{u.status}</div>
                    {!u.follow?<button onClick={()=> {onFollowMe(u.id)}}>Follow</button>:
                    <button onClick={()=> {onUnFollowMe(u.id)}}>UnFollow</button>}

                </div> )}

    </div>
}


export default Users