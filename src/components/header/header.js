import { useState } from 'react';
import { NavLink } from "react-router-dom"
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

    const scrollTo = (page) => {
        var offsetTop = 0
        if(page) {
            offsetTop = document.querySelector('.' + page).offsetTop
        }

        window.scrollTo({ top: offsetTop - 71, behavior: 'smooth' })
    }

    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className={background ? "navbar" : "navbar no-bg"}>
            <div className="container navbar-content">
                <NavLink className="logo" to='/'><img src={logo} className="logo navbar-img" alt="logo" /></NavLink>
                <div className="navbar-menu">
                    <button onClick={ () => scrollTo('events') } className="navbar-item">
                        <FontAwesomeIcon icon={faCalendarWeek} />
                        {t('Events')}
                    </button>
                    <button onClick={ () => scrollTo('publications') } className="navbar-item">
                        <FontAwesomeIcon icon={faBookOpen} />
                        {t('Publications')}
                    </button>
                    <button onClick={ () => scrollTo('dodfminer') } className="navbar-item">
                        <FontAwesomeIcon icon={faTools} />
                        {t('Toolbox')}
                    </button>
                    <button onClick={ () => scrollTo('members') } className="navbar-item">
                        <FontAwesomeIcon icon={faUsers} />
                        {t('Members')}
                    </button>
                    <button onClick={ () => scrollTo('partners') } className="navbar-item">
                        <FontAwesomeIcon icon={faHandshake} />
                        {t('Partners')}
                    </button>
                    <a className="navbar-item" href="https://github.com/UnB-KnEDLe">
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
                        <button onClick={ () => scrollTo('events') } className="sidebar-item">
                            <FontAwesomeIcon icon={faCalendarWeek} />
                            Events
                        </button>
                        <button onClick={ () => scrollTo('publications') } className="sidebar-item">
                            <FontAwesomeIcon icon={faBookOpen} />
                            Publications
                        </button>
                        <button onClick={ () => scrollTo('dodfminer') } className="sidebar-item">
                            <FontAwesomeIcon icon={faTools} />
                            Toolbox
                        </button>
                        <button onClick={ () => scrollTo('members') } className="sidebar-item">
                            <FontAwesomeIcon icon={faUsers} />
                            Members
                        </button>
                        <button onClick={ () => scrollTo('partners') } className="sidebar-item">
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
