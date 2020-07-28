import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
    return (
        <div className='wrapper'>
            <div className="logo_wrapper">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="logo">TRIVIA-GAME</div>
                </Link>
            </div>
            <div className="registration_wrapper">
                <div className="sign_up">SIGN-UP</div>
                <div className="register">REGISTER</div>
            </div>
        </div>
    );
};

export default Navbar;