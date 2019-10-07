import React from 'react';
import '../../App.css';
import styles from './Header.module.css'
import Logo from "../../Logo";
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <div className={styles.header}>
            <div>
                <Logo/>
            </div>
            <div className={styles.authLogin}>
                {props.isAuth ? <span>{props.login}</span> : <NavLink to={'login'}>Login</NavLink>}
            </div>
        </div>
    );
}

export default Header;

