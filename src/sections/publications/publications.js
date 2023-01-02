import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import publicationsList from '../../components/publicationsList'
import Modal from '../../components/Modal/modal'

import './publications.css'

const sectionsList = ['All', 'Technical Reports', 'Dissertations', 'Qualifications', 'Articles']
    .filter( section => publicationsList.some( publication => publication.section === section || section === "Todos") )
    .sort()
const publicationsLimit = 3

export default function Publications(props){
    var t = props.translationFunction
    const [ showAll, setShowAll ] = useState(false)
    const [ section, setSection ] = useState('Articles')
    const [ publications, setPublications ] = useState(publicationsList.filter(publication => publication.section === section))

    useEffect(() => {
        if(section === 'Todos') {
            setPublications(publicationsList);
            return;
        }
        setPublications(publicationsList.filter(publication => publication.section === section))
    }, [section])

    return (
        <section className="publications">
            <div className="container publications-content">
                <h1>{t('Publications')}</h1>
                <ul className="publications-list">
                    {publicationsList.map((item, index) => {
                        if(index < publicationsLimit) {
                            return (
                                <li className="publication-item card" key={index}>
                                    <h3>{item?.title}</h3>
                                    {item?.content.map(contentEl => {return (<p>{contentEl}</p>)})}
                                    {item?.link.map(linkEl =>
                                        <a href={linkEl.url} rel="noreferrer" target="_blank">
                                            <button className="btn">{linkEl.title}</button>
                                        </a>
                                    )}
                                </li>
                            )
                        } else return null
                    })}
                    <Link to='/publications'className="btn show-all-btn">
                        {t("See all publications")}
                    </Link>
                </ul>
                <Modal showSignal={showAll} setShowSignal={setShowAll} >
                    <div className="publications-content">
                        <h1>{t("Publications")}</h1>
                        <div className="publications-sections">
                            {sectionsList.map((sectionItem, index) => (
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
                </Modal>
            </div>
        </section>
    )
}
