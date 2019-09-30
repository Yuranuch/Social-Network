import React from "react"
import styles from "./Users.module.css";

const Users =(props)=> {


    const onFollowMe = (userId) => {
        props.userFollow(userId)
    }
    const onUnFollowMe = (userId) => {
        props.userUnFollow(userId)
    }

    let pageCount= Math.ceil(props.totalCount/props.pageSize)
    let pages = []
    for(let i=1; i<=pageCount; i++)
        pages.push(i)

    return <div className={styles.usersWrap}>
        <div>
            {pages.map(p=><span onClick={()=>{props.onSelectPage(p)}}
                                className={props.currentPage===p? styles.currentPage: ""}>{p}</span>)}
        </div>

        {props.users.map(u => <div key={u.id} className={styles.user}>
            <div>{u.id}</div>
            <div><img
                src={u.photos.small != null ? u.photos.small : "https://i.pinimg.com/236x/a0/c1/44/a0c14433c34cc9775fe5ff930f6b14a2.jpg"}/>
            </div>
            <div>{u.name}</div>
            <div>{u.status}</div>
            {!u.follow ? <button onClick={() => {onFollowMe(u.id)}}>Follow</button> :
                <button onClick={() => {onUnFollowMe(u.id)}}>UnFollow</button>}
        </div> )}

    </div>
}

export default Users