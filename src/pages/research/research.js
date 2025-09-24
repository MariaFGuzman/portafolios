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
                    <h2>{Research}</h2>
                    <p>{parse(t.research.p1)}</p>
                </div>}
                {tab === "publications" && <div>
                    <h2>Publications</h2>
                    <h3><b>{t.publications.list1.listTitle}</b></h3>
                    <ul>
                        {t.publications.list1.items.map((item, index) => (
                            <li key={index}>{parse(item)}</li>
                        ))}
                    </ul>
                    <h3><b>{t.publications.list2.listTitle}</b></h3>
                    <p>{t.publications.list2.description}</p>
                    <ul>
                        {t.publications.list2.items.map((item, index) => (
                            <li key={index}>{parse(item)}</li>
                        ))}
                    </ul>
                </div>}
                {tab==="projects" && <div>
                    <h2>Projects</h2>
                    {/* <p>{parse(t.projects.p1)}</p> */}
                </div>}
                {tab==="awards" && <div>
                    <h2>Awards</h2>
                    <ul>
                        {t.awards.map((award, index) => (
                            <li key={index}>{parse(award)}</li>
                        ))}
                    </ul>
                </div>}
            </div>
            <div className='submenu'>
                <ul>
                    <li onClick={()=>setTab("research")}>Research</li>
                    <li onClick={()=>setTab("publications")}>Publications</li>
                    <li onClick={()=>setTab("projects")}>Projects</li>
                    <li onClick={()=>setTab("awards")}>Awards</li>
                </ul>
            </div>
        </div>
    );
};

export default Research;
