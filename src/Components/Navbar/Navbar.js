import React from "react"
import "../../App.css"
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom"


const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.item}>
                <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/users" activeClassName={styles.active}>Users</NavLink>
            </div>
            <div className={styles.item}>
                <a>News</a>
            </div>
            <div className={styles.item}>
                <a>Music</a></div>
            <div className={styles.item}>
                <a>Settings</a>
            </div>

        </div>
    )
}

export default Navbar

