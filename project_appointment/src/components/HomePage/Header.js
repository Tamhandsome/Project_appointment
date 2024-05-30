import React from 'react';
import '../../styles/Header.scss';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="header">
            <div className="logo">Healthcare</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/service">Service</Link>
                <a href="#">Contact Us</a>
                <a href="#">Help</a>
                <a href="#">Blogs</a>
            </nav>
            <div className="auth-buttons">
                <button className="sign-up">Sign Up</button>
                <button className="log-in">Log In</button>
            </div>
        </header>
    );
};

export default Header;
