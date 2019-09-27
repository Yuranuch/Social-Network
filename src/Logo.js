import React from 'react';
import './App.css';
import styles from './Components/Header/Header.module.css'

const Logo =()=> {
  return (
    <div className={styles.logo}>
        <a href="#">
            <img src="https://files.adme.ru/files/news/part_181/1819765/19840515-34198310-001d-0-1530014829-0-1530015921-0-1530016364-1530016366-1500-1-1530016366-728-d6744bb09c-1530335026.jpg"/>
        </a>
    </div>
  );
}

export default Logo;

