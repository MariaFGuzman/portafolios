import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import content from '../../content';
import parse from 'html-react-parser';
import './research.scss';

const Research = () => {
    const { language } = useLanguage();
    const t = content[language];
    const [tab,setTab] = useState("research");
    return (
        <div className='research-content'>
            <div className='research-text'>
                {tab === "research" && <div>
                    <h2>Research</h2>
                    <p>{parse(t.research.p1)}</p>
                </div>}
                {tab === "publications" && <div>
                    <h2>Publications</h2>
                    <h3>{t.publications.list1.title}</h3>
                    <ul>
                        <li>{parse(t.publications.list1.item1)}</li>
                        <li>{parse(t.publications.list1.item2)}</li>
                        <li>{parse(t.publications.list1.item3)}</li>
                        <li>{parse(t.publications.list1.item4)}</li>
                    </ul>
                </div>}
                {tab==="projects" && <div>
                    <h2>Projects</h2>
                    {/* <p>{parse(t.projects.p1)}</p> */}
                </div>}
            </div>
            <div className='submenu'>
                <ul>
                    <li onClick={()=>setTab("research")}>Research</li>
                    <li onClick={()=>setTab("publications")}>Publications</li>
                    <li onClick={()=>setTab("projects")}>Projects</li>
                </ul>
            </div>
        </div>
    );
};

export default Research;
