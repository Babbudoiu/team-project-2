import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar">
            <NavLink 
            to="" 
            className="navlink">Home</NavLink>
            <NavLink 
            to=""  
            className="navlink">Series</NavLink>
            <NavLink 
            to="/watchlist"  
            className="navlink">Watchlist</NavLink>
            <NavLink 
            to="/profile"  
            className="navlink">Account</NavLink>
        </div>
    )
}

export default Navbar;