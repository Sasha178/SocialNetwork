import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";


const App = () => {
    return (
        <div className='app_wrapper'>
            <Header/>
            <Navbar/>
            <Navbar/>
        </div>);
}


export default App;
