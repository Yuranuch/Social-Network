import React from 'react';
import '../../App.css';

import styles from './Header.module.css'

import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me",
            {withCredentials: true, "API-KEY": "2712bbc4-99c4-4494-954c-6bd0564807d4"})
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

