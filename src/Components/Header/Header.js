import React from 'react';
import '../../App.css';

import styles from './Header.module.css'
import Logo from "../../Logo";


const Header =()=> {
    return (
        <div className={styles.header}>
            <Logo/>
        </div>
    );
}

export default Header;

