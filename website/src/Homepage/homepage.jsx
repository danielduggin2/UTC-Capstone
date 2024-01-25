import React from 'react';
import './homepage.css'
import logo from '../Images/logo.png'
class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="nav-bar">
            {/* <input id="nav-toggle" type="checkbox"/> */}
            <div id="nav-header">
             <img src={logo} alt='getrite logo'/>
            </div>
            <div id="nav-content">
                <div class="nav-button"><i class="fas fa-palette"></i><span>Calendar</span></div>
                <div class="nav-button"><i class="fas fa-images"></i><span>Patient List</span></div>
                <div class="nav-button"><i class="fas fa-thumbtack"></i><span>Inbox</span></div>
                <hr/>
                <div class="nav-button"><i class="fas fa-heart"></i><span>Exercises</span></div>
                <div class="nav-button"><i class="fas fa-chart-line"></i><span>Purchase Equipment</span></div>
                {/* <div class="nav-button"><i class="fas fa-fire"></i><span>Challenges</span></div>
                <div class="nav-button"><i class="fas fa-magic"></i><span>Spark</span></div>
                <hr/>
                <div class="nav-button"><i class="fas fa-gem"></i><span>Codepen Pro</span></div> */}
                <div id="nav-content-highlight"></div>
            </div>
            {/* <input id="nav-footer-toggle" type="checkbox"/> */}
            {/* <div id="nav-footer">

            </div> */}
            </div>
        );
    }

};
export default Navbar

// const NavBar = () => (
//     <div id="nav-bar">
//     <input id="nav-toggle" type="checkbox"/>
//     <div id="nav-header"><a id="nav-title" href="https://codepen.io" target="_blank">C<i class="fab fa-codepen"></i>DEPEN</a>
//         <label for="nav-toggle"><span id="nav-toggle-burger"></span></label>
//         <hr/>
//     </div>
//     <div id="nav-content">
//         <div class="nav-button"><i class="fas fa-palette"></i><span>Your Work</span></div>
//         <div class="nav-button"><i class="fas fa-images"></i><span>Assets</span></div>
//         <div class="nav-button"><i class="fas fa-thumbtack"></i><span>Pinned Items</span></div>
//         <hr/>
//         <div class="nav-button"><i class="fas fa-heart"></i><span>Following</span></div>
//         <div class="nav-button"><i class="fas fa-chart-line"></i><span>Trending</span></div>
//         <div class="nav-button"><i class="fas fa-fire"></i><span>Challenges</span></div>
//         <div class="nav-button"><i class="fas fa-magic"></i><span>Spark</span></div>
//         <hr/>
//         <div class="nav-button"><i class="fas fa-gem"></i><span>Codepen Pro</span></div>
//         <div id="nav-content-highlight"></div>
//     </div>
//     <input id="nav-footer-toggle" type="checkbox"/>
//     <div id="nav-footer">

//     </div>
//     </div>
// );

// export default NavBar;
