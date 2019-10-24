import React from 'react';
import '../../App.css';
import styles from './Header.module.css'
import Logo from "../../Logo";
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <div className={styles.header}>
                <Logo/>
            <div className={styles.autorizeBlock}>
                <div className={styles.authLogin}>
                    {props.isAuth ? <span>{props.login}</span> : <NavLink to={'login'}>Login</NavLink>}
                </div>
                <div>
                    {props.isAuth ? <button onClick={props.logout}>Logout</button> : <span>{props.login}</span>}
                </div>
            </div>
        </div>
    );
}

export default Header;

