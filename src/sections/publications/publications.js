import { useState } from 'react'

import publicationsList from './publicationsList'

import './publications.css'

export default function Publications(){
    const [showAll, setShowAll] = useState(false)
    const publicationsLimit = 4

    return (
        <section className="publications">
            <div className="container publications-content">
                <h1>Publications</h1>
                <ul className="publications-list">
                    {publicationsList.map((item, index) => {
                        if(index < publicationsLimit || showAll) {
                            return (
                                <li className="publication-item" key={index}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <a href={item.link.url}>{item.link.title}</a>
                                </li>
                            )
                        } else return null
                    })}
                </ul>
                <div className="publications-show-all">
                    <button className="btn show-all-btn" onClick={ () => setShowAll(!showAll) }>
                    {!showAll ? "Ver todas as publicações" : "Ver menos publicações"}
                    </button>
                </div>
            </div>
        </section>
    )
}