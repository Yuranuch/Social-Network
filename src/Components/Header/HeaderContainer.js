import React from "react"
import "../../App.css"
import Header from "./Header"
import {connect} from "react-redux"
import {logout} from "../../redux/auth-reducer"

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props}/>
        )
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

