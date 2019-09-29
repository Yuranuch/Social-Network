import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App-Wrapper">
                    <Header/>
                    <div className="container">
                        <Navbar/>
                        <div className="content">
                            <Route path="/profile" component={Profile}/>
                            <Route path="/dialogs" component={DialogsContainer}/>
                            <Route path="/users" component={UsersContainer}/>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

