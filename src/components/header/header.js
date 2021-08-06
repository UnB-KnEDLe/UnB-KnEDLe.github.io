import { useState } from 'react';

import logo from '../../assets/img/logo/logo_knedle.svg';
import brFlag from '../../assets/img/iconBrasil.png'
import usFlag from '../../assets/img/iconUK.png'
import githubLogo from '../../assets/img/iconGithub.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek, faBookOpen, faTools, faUsers, faHandshake, faBars } from '@fortawesome/free-solid-svg-icons'

import './sidebar.css'
import './header.css'

export default function Header(props){
    var background = props.bg
    var t = props.translationFunction
    var setLang = props.changeLangFunction
    var scrollFunctions = props.scrollFunctions

    const [showMenu, setShowMenu] = useState(false)

    // const scrollTo = (ref) => {
    //     pageRefs[ref].current.scrollIntoView()
    // }

    // const scrollTo = (page) => {
    //     scrollFunctions[page]()
    // }

    return (
        <header className={background ? "navbar" : "navbar no-bg"}>
            <div className="container navbar-content">
                <a href="./"><img src={logo} className="logo navbar-img" alt="logo" /></a>
                <div className="navbar-menu">
                    <button onClick={ scrollFunctions }lassName="navbar-item">
                        <FontAwesomeIcon icon={faCalendarWeek} />
                        {t('Events')}
                    </button>
                    <button className="navbar-item">
                        <FontAwesomeIcon icon={faBookOpen} />
                        {t('Publications')}
                    </button>
                    <button className="navbar-item">
                        <FontAwesomeIcon icon={faTools} />
                        {t('Toolbox')}
                    </button>
                    <button className="navbar-item">
                        <FontAwesomeIcon icon={faUsers} />
                        {t('Members')}
                    </button>
                    <button className="navbar-item">
                        <FontAwesomeIcon icon={faHandshake} />
                        {t('Partners')}
                    </button>
                    <a className="navbar-item" href=".">
                        <img src={githubLogo} className="github-logo" alt="github-logo"/>
                    </a>
                    <div className="navbar-flags">
                        <button onClick={() => setLang('en')} className="navbar-flag">
                            <img src={usFlag} className="navbar-img" alt="flag"/>
                        </button>
                        <button onClick={() => setLang('br')} className="navbar-flag">
                            <img src={brFlag} className="navbar-img" alt="flag"/>
                        </button>
                    </div>
                    <div className={showMenu ? "sidebar active" : "sidebar"}>
                        <button
                            onClick={() => setShowMenu(!showMenu) }
                            className={showMenu ? "sidebar-item active bars" : "sidebar-item bars"}
                        >
                            <FontAwesomeIcon size="lg" icon={faBars} />
                        </button>
                        <button className="sidebar-item">
                            <FontAwesomeIcon icon={faCalendarWeek} />
                            Events
                        </button>
                        <button className="sidebar-item">
                            <FontAwesomeIcon icon={faBookOpen} />
                            Publications
                        </button>
                        <button className="sidebar-item">
                            <FontAwesomeIcon icon={faTools} />
                            Toolbox
                        </button>
                        <button className="sidebar-item">
                            <FontAwesomeIcon icon={faUsers} />
                            Members
                        </button>
                        <button className="sidebar-item">
                            <FontAwesomeIcon icon={faHandshake} />
                            Partners
                        </button>
                        <a className="sidebar-item" href=".">
                            <img src={githubLogo} className="github-logo" alt="github-logo"/>
                        </a>
                        <div className="sidebar-flags">
                            <button onClick={() => setLang('en')} className="sidebar-flag">
                                <img src={usFlag} className="navbar-img" alt="flag"/>
                            </button>
                            <button onClick={() => setLang('br')} className="sidebar-flag">
                                <img src={brFlag} className="navbar-img" alt="flag"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
    )
}
