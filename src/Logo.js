import React from 'react';
import './App.css';
import styles from './Components/Header/Header.module.css'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <a href="#">
                Say<br/>Hello
            </a>
        </div>
    );
}

export default Logo;

