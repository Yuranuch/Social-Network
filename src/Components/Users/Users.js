import React from "react"
import styles from './Users.module.css'
import * as axios from "axios";
const Users =(props) => {
    if(props.users.length===0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                    props.setUsers(response.data.items)
                }
            )
    }
    let onFollowMe = (userId) => {
        props.userFollow(userId)
    }
    let onUnFollowMe = (userId) => {
        props.userUnFollow(userId)
    }
    let onSelectPage=(selectedPage)=> {
        props.setCurrentPage(selectedPage)
    }

    let pageCount= Math.ceil(props.totalCount/props.pageSize)

    let pages = []
    for(let i=1; i<=pageCount; i++)
        pages.push(i)
    return <div className={styles.usersWrap}>
        <div>
            {pages.map(p=><span onClick={()=>{onSelectPage(p)}}
                className={props.currentPage===p? styles.currentPage: ""}>{p}</span>)}
        </div>
        {props.users.map(u => <div key={u.id} className={styles.user}>
            <div>{u.id}</div>
            <div><img
                src={u.photos.small != null ? u.photos.small : "https://i.pinimg.com/236x/a0/c1/44/a0c14433c34cc9775fe5ff930f6b14a2.jpg"}/>
            </div>
            <div>{u.name}</div>
            <div>{u.status}</div>
            {!u.follow ? <button onClick={() => {
                    onFollowMe(u.id)
                }}>Follow</button> :
                <button onClick={() => {
                    onUnFollowMe(u.id)
                }}>UnFollow</button>}

                </div> )}

    </div>
}


export default Users