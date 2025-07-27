import React from 'react';
import { FaLinkedin, FaTwitch } from 'react-icons/fa';
import { GiBookCover } from 'react-icons/gi';
import { MdChurch } from 'react-icons/md';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="link-list">
                <li>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='icon'/> LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">
                        <FaTwitch className='icon'/> Twitch
                    </a>
                </li>
                <li>
                    <a href="https://www.churchofjesuschrist.org" target="_blank" rel="noopener noreferrer">
                        <MdChurch className='icon'/> LDS
                    </a>
                </li>
                <li>
                    <a href="https://www.librosdelmarquez.com" target="_blank" rel="noopener noreferrer">
                        <GiBookCover className='icon'/> Libros del Marquez
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
