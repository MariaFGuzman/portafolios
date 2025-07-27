import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link className='link' to="/">Home</Link></li>
                    <li><Link className='link' to="/biography">Biography</Link></li>
                    <li><Link className='link' to="/research">Research</Link></li>
                    <li><Link className='link' to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;