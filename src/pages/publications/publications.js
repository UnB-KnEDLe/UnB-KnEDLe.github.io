import { useEffect, useState } from 'react'

import Header from '../../components/header/header'
import publicationsList from '../../components/publicationsList'

import '../../App.css';
import '../../sections.css'
import './publications.css'

import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n'

function PublicationsPage({ t }) {

    const changeLang = (lang) => {
        i18n.changeLanguage(lang)
    }
    const sectionList = ['All'];
    publicationsList.map((item)=>{
        if(sectionList.indexOf(item.section) ===-1)
            sectionList.push(item.section)
    })
    const [ section, setSection ] = useState('All')
    const [ publications, setPublications ] = useState(publicationsList.filter(publication => publication.section === section))
    useEffect(() => {
        if(section === 'All') {
            setPublications(publicationsList);
            return;
        }
        setPublications(publicationsList.filter(publication => publication.section === section))
    }, [section])

    return (
        <div className='App'>
            <Header
                changeLangFunction={changeLang}
                translationFunction={t}
                bg={true}
            />
            <div className="publications-content">
                <h1 className='publications'>{t("Publications")}</h1>
                <div className="publications-sections">
                    {sectionList.map((sectionItem, index) => (
                        <button className={section === sectionItem ? "btn active" : "btn"} onClick={ () => { setSection(sectionItem) }} key={index}>
                            {t(sectionItem)}
                        </button>
                    ))}
                </div>
                <ul className="publications-list">
                    <h2>{t(section)}</h2>
                    { publications.map( (item, index) => (
                        <li className="publication-item card" key={index}>
                            <h3>{item?.title}</h3>
                            {item?.content.map(contentEl => {return (<p>{contentEl}</p>)})}
                            {item?.link.map(linkEl =>
                                <a href={linkEl.url} rel="noreferrer" target="_blank">
                                    <button className="btn">{linkEl.title}</button>
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default withNamespaces()(PublicationsPage);
