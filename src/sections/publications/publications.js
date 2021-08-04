import { useState } from 'react'

import publicationsList from '../../components/publicationsList/publicationsList'

import './publications.css'

export default function Publications(){
    const [showAll, setShowAll] = useState(false)
    const publicationsLimit = 3

    return (
        <section className="publications">
            <div className="container publications-content">
                <h1>Publications</h1>
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
                    <button className="btn show-all-btn">
                        <a href="./publications" >Ver todas as publicações</a>
                    </button>
                </ul>
            </div>
        </section>
    )
}