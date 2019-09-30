import React from 'react';
import '../../App.css';

import styles from './Header.module.css'

import Header from "./Header";


class HeaderContainer extends React.Component {

    render () {
        return (
            <div className={styles.header}>
                <Header {...this.props}/>
            </div>
        );
    }
}


export default HeaderContainer;

