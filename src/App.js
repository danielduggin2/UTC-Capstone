import React from "react";
import NavBar from './Components/Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import NavBar from "./Homepage/homepage";
import Dashboard from "./Pages/Dashboard"; // Import your Dashboard component here
import { Routes} from "react-router-dom";
import Exercises from "./Pages/Exercises";
import PatientList from "./Pages/PatientList";
import Inbox from "./Pages/Inbox";
import Purchase from "./Pages/Purcahse";
import './main.css';
function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/patient" element={<PatientList/>} />
                <Route path="/inbox" element={<Inbox/>} />
                <Route path="/exercises" element={<Exercises/>} />
                <Route path="/purchase" element={<Purchase/>} />
            </Routes>
        </>
    );
}

export default App;
