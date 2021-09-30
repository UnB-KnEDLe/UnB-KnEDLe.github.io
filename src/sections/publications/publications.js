import { useState } from 'react'
import publicationsList from '../../components/publicationsList'
import Modal from '../../components/Modal/modal'

import './publications.css'

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
                                <li className="publication-item card" key={index}>
                                    <h3>{item?.title}</h3>
                                    {item?.content.map(contentEl => {return (<p>{contentEl}</p>)})}
                                    {item?.link.map(linkEl => {
                                        return (
                                            <a href={linkEl.url} rel="noreferrer" target="_blank">
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
                <Modal showSignal={showAll} setShowSignal={setShowAll} >
                    <div className="publications-content">
                        <h1>Publications</h1>
                        <ul className="publications-list">
                            { publicationsList.map((item, index) => {
                                return (
                                    <li className="publication-item card" key={index}>
                                        <h3>{item?.title}</h3>
                                        {item?.content.map(contentEl => {return (<p>{contentEl}</p>)})}
                                        {item?.link.map(linkEl => {
                                            return (
                                                <a href={linkEl.url} rel="noreferrer" target="_blank">
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