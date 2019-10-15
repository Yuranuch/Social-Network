import React from 'react';
import '../../App.css';
import styles from './Header.module.css'
import Header from "./Header";
import {connect} from "react-redux";
import {authMeThunkCreator, logout, setUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {



    render() {
        return (
            <div className={styles.header}>
                <Header {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        logout: () => {
            dispatch(logout())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

