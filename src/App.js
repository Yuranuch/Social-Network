import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";

import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Users from "./Components/Users/Users";


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
                            <Route path="/dialogs" component={Dialogs}/>
                            <Route path="/users" component={Users}/>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

