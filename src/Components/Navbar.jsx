import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo2 from '../Images/logo2.png';
const NavBar = () => {
    return (
            <div id="nav-bar">
            <div id="nav-header">
             <img src={logo2} alt='getrite logo'/>
            </div>
            <div id="nav-content">
                <div className="nav-button"><i className="fas fa-palette"></i><span><a href="/">Dashboard</a></span></div>
                <div className="nav-button"><i className="fas fa-images"></i><span><a href="/patient">Patient List</a></span></div>
                <div className="nav-button"><i className="fas fa-thumbtack"></i><span><a href="inbox">Inbox</a></span></div>
                <hr/>
                <div className="nav-button"><i className="fas fa-heart"></i><span><a href="/exercises">Exercises</a></span></div>
                <div className="nav-button"><i className="fas fa-chart-line"></i><span><a href="/purchase">Purchase</a></span></div>
                <div id="nav-content-highlight"></div>
            </div>
            </div>
    );
}

export default NavBar;
