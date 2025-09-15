import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitch } from 'react-icons/fa';
import { GiBookCover } from 'react-icons/gi';
import { MdChurch } from 'react-icons/md';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher.js';
import { useLanguage } from '../../context/LanguageContext.js';
import content from '../../content.js';
import './header.scss';

const Header = () => {
    const { language } = useLanguage();
    const t = content[language].header;
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link className='link' to="/">{t.links.home}</Link></li>
                    <li><Link className='link' to="/aboutme">{t.links.aboutMe}</Link></li>
                    <li><Link className='link' to="/research">{t.links.research}</Link></li>
                    <li><Link className='link' to="/contact">{t.links.contact}</Link></li>
                </ul>
                <LanguageSwitcher />
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