import React, {Component} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import UsersContainer from "./Components/Users/UsersContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {Route, withRouter} from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {authMeThunkCreator} from "./redux/auth-reducer";

class App extends Component {

    componentDidMount() {
        this.props.authMeThunkCreator()
    }

    render() {
        return (
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

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authMeThunkCreator: () => {
            dispatch(authMeThunkCreator())
        },
    }
}


export default withRouter (connect(mapStateToProps,mapDispatchToProps)(App))