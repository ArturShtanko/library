
import React from "react";
import './navbar.css';

import {NavLink} from "react-router-dom"

function Navbar(){
    return (
        <div className="wrapper-navbar">
            <NavLink className="logo" to="/books">Library</NavLink>
            <span id="links">
                <NavLink className="link" to="/books">Books</NavLink>
                <NavLink className="link" to="/about-us">About Us</NavLink>
                <NavLink className="link" to="/contacts">Contacts</NavLink>
            </span>
        </div>
    );
}

export default Navbar;