import React from 'react';
import './home.scss';
import matilda from '../../assets/images/matilda.jpg';
import fernanda from '../../assets/images/home-foto-fernanda.png';
import { useLanguage } from '../../context/LanguageContext';
import content from '../../content';

const Home = () => {
    const { language } = useLanguage();
    const t = content[language].home;
    return (
        <div className='home-container'>
            <div className='home-content'>
                <h1>Maria F. Guzman</h1>
                <p>{t.title}</p>
            </div>
            <div className='home-image'>
                <img src={fernanda} alt='Placeholder' />
            </div>
        </div>
    );
};

export default Home;