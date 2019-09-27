import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";

import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";



const App =()=> {
  return (

      <div className="App">
          <div className="App-Wrapper">
              <Header/>
              <div className="container">
                    <Navbar/>
                  <Profile/>
              </div>
          </div>
      </div>
  );
}

export default App;

