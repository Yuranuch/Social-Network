import React from "react"
import styles from './Users.module.css'
import * as axios from "axios";
class Users extends React.Component {

    componentDidMount() {
        if(this.props.users.length===0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                        this.props.setUsers(response.data.items)
                    }
                )
        }
    }

    onFollowMe = (userId) => {
        this.props.userFollow(userId)
    }
    onUnFollowMe = (userId) => {
        this.props.userUnFollow(userId)
    }
    onSelectPage=(selectedPage)=> {
        this.props.setCurrentPage(selectedPage)
    }





render = () => {
    debugger
    let pageCount= Math.ceil(this.props.totalCount/this.props.pageSize)
    let pages = []
    for(let i=1; i<=pageCount; i++)
        pages.push(i)

    return <div className={styles.usersWrap}>
        <div>
            {pages.map(p=><span onClick={()=>{this.onSelectPage(p)}}
                className={this.props.currentPage===p? styles.currentPage: ""}>{p}</span>)}
        </div>
        {this.props.users.map(u => <div key={u.id} className={styles.user}>
            <div>{u.id}</div>
            <div><img
                src={u.photos.small != null ? u.photos.small : "https://i.pinimg.com/236x/a0/c1/44/a0c14433c34cc9775fe5ff930f6b14a2.jpg"}/>
            </div>
            <div>{u.name}</div>
            <div>{u.status}</div>
            {!u.follow ? <button onClick={() => {this.onFollowMe(u.id)}}>Follow</button> :
                <button onClick={() => {this.onUnFollowMe(u.id)}}>UnFollow</button>}
                </div> )}

    </div>
}
}


export default Users