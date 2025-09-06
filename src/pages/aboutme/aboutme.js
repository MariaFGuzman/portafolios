import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import content from '../../content';
import './aboutme.scss';

const Aboutme = () => {
    const { language } = useLanguage();
    const t = content[language].aboutMe;
    return (
        <div className='about-content'>
            <div className='aboutme-text'>
                <p>{t.p1}</p>
                <p>{t.p2}</p>
                <p>{t.p3}</p>
                <p>{t.p4}</p>
            </div>
        </div>
    );
};

export default Aboutme;