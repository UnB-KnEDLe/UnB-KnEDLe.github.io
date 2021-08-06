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

    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className={background ? "navbar" : "navbar no-bg"}>
            <div className="container navbar-content">
                <a href="./"><img src={logo} className="logo navbar-img" alt="logo" /></a>
                <div className="navbar-menu">
                    <a className="navbar-item" href=".">
                        <FontAwesomeIcon icon={faCalendarWeek} />
                        {t('Events')}
                    </a>
                    <a className="navbar-item" href=".">
                        <FontAwesomeIcon icon={faBookOpen} />
                        {t('Publications')}
                    </a>
                    <a className="navbar-item" href=".">
                        <FontAwesomeIcon icon={faTools} />
                        {t('Toolbox')}
                    </a>
                    <a className="navbar-item" href=".">
                        <FontAwesomeIcon icon={faUsers} />
                        {t('Members')}
                    </a>
                    <a className="navbar-item" href=".">
                        <FontAwesomeIcon icon={faHandshake} />
                        {t('Partners')}
                    </a>
                    <a className="navbar-item github-logo" href=".">
                        <img src={githubLogo} alt="github-logo"/>
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
                        <a className="sidebar-item" href=".">
                            <FontAwesomeIcon icon={faCalendarWeek} />
                            Events
                        </a>
                        <a className="sidebar-item" href=".">
                            <FontAwesomeIcon icon={faBookOpen} />
                            Publications
                        </a>
                        <a className="sidebar-item" href=".">
                            <FontAwesomeIcon icon={faTools} />
                            Toolbox
                        </a>
                        <a className="sidebar-item" href=".">
                            <FontAwesomeIcon icon={faUsers} />
                            Members
                        </a>
                        <a className="sidebar-item" href=".">
                            <FontAwesomeIcon icon={faHandshake} />
                            Partners
                        </a>
                        <a className="sidebar-item github-logo" href=".">
                            <img src={githubLogo} alt="github-logo"/>
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
