import { useState } from 'react'
import publicationsList from '../../components/publicationsList'

import Modal from 'react-modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './publications.css'

var style = {
    content: {
        marginTop: '50px',
    }
}

export default function Publications(props){
    var t = props.translationFunction
    const [showAll, setShowAll] = useState(false)
    
    const publicationsLimit = 3

    return (
        <section className="publications">
            <div className="container publications-content">
                <h1>{t('Publications')}</h1>
                <ul className="publications-list">
                    {publicationsList.map((item, index) => {
                        if(index < publicationsLimit) {
                            return (
                                <li className="publication-item" key={index}>
                                    <h3>{item?.title}</h3>
                                    {item?.content.map(contentEl => {return (<p>{contentEl}</p>)})}
                                    {item?.link.map(linkEl => {
                                        return (
                                            <a href={linkEl.url}>
                                                <button className="btn">{linkEl.title}</button>
                                            </a>
                                        )
                                    })}
                                </li>
                            )
                        } else return null
                    })}
                    <button onClick={ () => { setShowAll(true) }}className="btn show-all-btn">
                        {t("See all publications")}
                    </button>
                </ul>
                <Modal
                    isOpen={showAll}
                    style={style}
                >
                    <div className="publications-content">
                        <div className="publications-header">
                            <h1>Publications</h1>
                            <button onClick={ () => setShowAll(false) } className="btn">
                                <FontAwesomeIcon size="lg" icon={faTimes}/>
                            </button>
                        </div>
                        <ul className="publications-page-list">
                            { publicationsList.map((item, index) => {
                                return (
                                    <li className="publication-page-item" key={index}>
                                        <h3>{item?.title}</h3>
                                        {item?.content.map(contentEl => {return (<p>{contentEl}</p>)})}
                                        {item?.link.map(linkEl => {
                                            return (
                                                <a href={linkEl.url}>
                                                    <button className="btn">{linkEl.title}</button>
                                                </a>
                                            )
                                        })}
                                    </li>
                                )
                            }) }
                        </ul>
                    </div>
                </Modal>
            </div>
        </section>
    )
}