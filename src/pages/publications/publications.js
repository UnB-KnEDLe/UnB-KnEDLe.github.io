import Header from '../../components/header/header';

import publicationsList from '../../components/publicationsList/publicationsList'

import './publications.css'

import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n'

function Publications({ t }) {

    const changeLang = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <div className="publications-page">
            <Header
            changeLangFunction={changeLang}
            translationFunction={t}
            bg={true}
        />
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

export default withNamespaces()(Publications);