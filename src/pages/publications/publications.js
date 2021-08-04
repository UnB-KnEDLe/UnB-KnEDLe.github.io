import Header from '../../components/header/header';

import publicationsList from '../../components/publicationsList/publicationsList'

import './publications.css'

export default function Publications() {
    return (
        <div className="publications-page">
            <Header bg={true}/>
            <div className="container publications-content">
                <h1>Publications</h1>
                <ul className="publications-list">
                    { publicationsList.map((item, index) => {
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
                    }) }
                </ul>
            </div>
        </div>
    )
}