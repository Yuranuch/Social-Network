import React from "react"
import styles from './Users.module.css'
const Users =(props) => {
    if(props.users.length===0) {
    props.setUsers([
        {id: 0, photo: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg", userName: "Yura", follow: true, status: "I'm a boss", location: {city: "Minsk"}},
        {id: 1, photo: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg", userName: "Sasha", follow: false, status: "I'm a boss too", location: {city: "Brest"}},
        {id: 2, photo: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg", userName: "Andrey", follow: false, status: "I'm a boss", location: {city: "Vitebsk"}},
        ]

    )}
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