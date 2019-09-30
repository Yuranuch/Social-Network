import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App-Wrapper">
                    <Header/>
                    <div className="container">
                        <Navbar/>
                        <div className="content">

                            <Route path="/profile"
                                  render={()=> <ProfileContainer/>} />
                            <Route path="/dialogs"
                                   render={()=> <DialogsContainer />} />
                            <Route path="/users"
                                   render={()=> <UsersContainer />}/>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

