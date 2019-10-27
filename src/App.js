import React, {Component} from "react"
import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import UsersContainer from "./Components/Users/UsersContainer"
import DialogsContainer from "./Components/Dialogs/DialogsContainer"
import ProfileContainer from "./Components/Profile/ProfileContainer"
import {Route, withRouter} from "react-router-dom"
import HeaderContainer from "./Components/Header/HeaderContainer"
import Login from "./Components/Login/Login"
import {connect} from "react-redux"
import {initializedApp} from "./redux/app-reducer"
import Preloader from "./Components/common/preloader/preloader"

class App extends Component {

    componentDidMount() {
        this.props.initializedApp()
    }
    render() {
        if(!this.props.initialized){
            return<Preloader/>
        }return (
            <div className="App">
                <div className="App-Wrapper">
                    <HeaderContainer/>
                    <div className="container">
                        <Navbar/>
                        <div className="content">
                            <Route path="/profile/:userId?"
                                   render={() => <ProfileContainer/>}/>
                            <Route path="/dialogs"
                                   render={() => <DialogsContainer/>}/>
                            <Route path="/users"
                                   render={() => <UsersContainer/>}/>
                            <Route path="/login"
                                   render={() => <Login/>}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.initial.initialized
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initializedApp: () => {
            dispatch(initializedApp())
        },
    }
}

export default withRouter (connect(mapStateToProps,mapDispatchToProps)(App))