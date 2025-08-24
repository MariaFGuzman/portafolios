import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitch } from 'react-icons/fa';
import { GiBookCover } from 'react-icons/gi';
import { MdChurch } from 'react-icons/md';
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
                <ul className="link-list">
                    <li>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='icon'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">
                            <FaTwitch className='icon'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.churchofjesuschrist.org" target="_blank" rel="noopener noreferrer">
                            <MdChurch className='icon'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.librosdelmarquez.com" target="_blank" rel="noopener noreferrer">
                            <GiBookCover className='icon'/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;