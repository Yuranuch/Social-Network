import React from "react"
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let pageCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++)
        pages.push(i)

    return <div className={styles.usersWrap}>
        <div>
            {pages.map(p => <span onClick={() => {
                props.onSelectPage(p)
            }}
                                  className={props.currentPage === p ? styles.currentPage : ""}>{p}</span>)}
        </div>

        {props.users.map(u => <div key={u.id} className={styles.user}>
            <div>{u.id}</div>
            <div>
                <NavLink to={`/profile/` + u.id}>
                    <img src={u.photos.small != null ? u.photos.small
                        : "https://i.pinimg.com/236x/a0/c1/44/a0c14433c34cc9775fe5ff930f6b14a2.jpg"}
                    />
                </NavLink>
            </div>
            <div>{u.name}</div>
            <div>{u.status}</div>
            {u.follow ? <button disabled={props.followInProgress.some(id => id === u.id)} onClick={() => {
                    props.unfollowMeThunkCreator(u.id)

                }}>UnFollow</button> :
                <button disabled={props.followInProgress.some(id => id === u.id)} onClick={() => {
                    props.followMeThunkCreator(u.id)

                }}>Follow</button>}
        </div>)}

    </div>
}

export default Users

