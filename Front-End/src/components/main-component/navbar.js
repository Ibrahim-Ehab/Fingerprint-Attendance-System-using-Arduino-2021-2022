import '../css/NavBar.css';
import '../css/addation.css';

import 'https://kit.fontawesome.com/b99e675b6e.js';
import { NavLink } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

function NavBar(props) {

    const IsOpen = "IsOpen";
    const notOpen = "notOpen";
    return (
        <div className="sidebar">
            <a href="/"><h2>Sidebar</h2></a>
            <ul>
                <li ><NavLink to="/table" className={({ isActive }) => (isActive ? "IsOpen" : "notOpen")}><i className={"fas fa-home"}></i>Table</NavLink></li>
                {/* <li ><NavLink to="/form" className={({ isActive }) => (isActive ? "IsOpen" : "notOpen")}><i className="fas fa-user "></i>data table</NavLink></li> */}
                <li ><NavLink to="/waitingList" className={({ isActive }) => (isActive ? "IsOpen" : "notOpen")}><i className="fas fa-address-card "></i>Waiting List</NavLink></li>
                <li ><NavLink to="/" onClick={() => props.tokenChanged("NoNe")} className={({ isActive }) => (isActive ? "IsOpen" : "notOpen")}><i className="fas fa-sign-out-alt "></i>Logout</NavLink></li>

            </ul>
            <div className="social_media">
                <a href="https://www.facebook.com/ibrahim.elbana.10"><i className="fab fa-facebook-f NavLink-hover link-hover" ></i></a>
                <a href="https://www.youtube.com/channel/UCmbA_l0FXACyjbTOt7T_l-w"><i className="fab fa-youtube NavLink-hover link-hover"></i></a>
                <a href="http://instagram.com/baheradelahmed?utm_source=qr"><i className="fab fa-instagram NavLink-hover link-hover"></i></a>
            </div>
        </div>
    );
}

export default NavBar;