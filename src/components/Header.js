import React from 'react';
import {Link} from "react-router-dom";
// import logo from '/public/logo.png'

const Header = () => {
    return (
        <header>
            <div className={"container"}>
                <div className="box-header">
                    <Link to={'/'}><img src='/logo.png' alt="logo"/></Link>
                    <div style={{display:"flex", gap: '20px'}}>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/forum">Forum</Link>
                        <img src="/facebook_icon.png" alt="facebook"/>
                        <img src="/twitter_icon.png" alt="twitter"/>
                        <input type="search" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;