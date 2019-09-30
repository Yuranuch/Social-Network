import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";

import UsersContainer from "./Components/Users/UsersContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {Route} from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";


const App = () => {
    return (

            <div className="App">
                <div className="App-Wrapper">
                    <HeaderContainer/>
                    <div className="container">
                        <Navbar/>
                        <div className="content">

                            <Route path="/profile/:userId?"
                                  render={()=> <ProfileContainer/>} />
                            <Route path="/dialogs"
                                   render={()=> <DialogsContainer />} />
                            <Route path="/users"
                                   render={()=> <UsersContainer />}/>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default App;

