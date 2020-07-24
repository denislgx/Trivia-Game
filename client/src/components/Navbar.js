import React from 'react';
import '../styles/Navbar.scss';

const Navbar = () => {
    return (
        <div className='wrapper'>
            <div className="logo_wrapper">
                <div onClick={() => window.location.reload()} className="logo">TRIVIA-GAME</div>
            </div>
            <div className="registration_wrapper">
                <div className="sign_up">SIGN-UP</div>
                <div className="register">REGISTER</div>
            </div>
        </div>
    );
};

export default Navbar;