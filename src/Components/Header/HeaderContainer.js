import React from 'react';
import '../../App.css';

import styles from './Header.module.css'

import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import {authMe} from "../../API/api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        authMe()
            .then(response => {
                    if (response.data.resultCode === 0) {
                        let {id, login, email}=response.data.data
                        this.props.setUserData(id, login, email)
                    }
                }
            )
    }

    render () {
        return (
            <div className={styles.header}>
                <Header {...this.props}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {

    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        setUserData: (id, login, email) => {
            dispatch(setUserData(id, login, email))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

