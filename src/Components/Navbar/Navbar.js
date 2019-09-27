import React from 'react';
import '../../App.css';
import styles from './Navbar.module.css'

const Navbar =()=> {
  return (
      <div className={styles.navbar}>

          <div><a href="#">Profile</a></div>
          <div><a href="#">Messages</a></div>
          <div><a href="#">News</a></div>
          <div><a href="#">Music</a></div>
          <div><a href="#">Settings</a></div>

      </div>
  );
}

export default Navbar;

