import logo from '../../assets/img/logo/logo_knedle.svg';
import brFlag from '../../assets/img/iconBrasil.png'
import usFlag from '../../assets/img/iconUK.png'
import githubLogo from '../../assets/img/iconGithub.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek, faBookOpen, faTools, faUsers, faHandshake } from '@fortawesome/free-solid-svg-icons'

import './header.css'

export default function Header(props){
    var background = props.bg

    return (
        <header className={background ? "navbar" : "navbar no-bg"}>
            <div className="container navbar-content">
                <a href="./"><img src={logo} className="logo navbar-img" alt="logo" /></a>
                <div className="navbar-menu">
                    <a className="navbar-item" href=".">
                        <FontAwesomeIcon icon={faCalendarWeek} />
                        Events
                    </a>
                    <a className="navbar-item" href=".">
                        <FontAwesomeIcon icon={faBookOpen} />
                        Publications
                    </a>
                    <a className="navbar-item" href=".">
                        <FontAwesomeIcon icon={faTools} />
                        Toolbox
                    </a>
                    <a className="navbar-item" href=".">
                        <FontAwesomeIcon icon={faUsers} />
                        Members
                    </a>
                    <a className="navbar-item" href=".">
                        <FontAwesomeIcon icon={faHandshake} />
                        Partners
                    </a>
                    <a className="navbar-item github-logo" href=".">
                        <img src={githubLogo} alt="github-logo"/>
                    </a>
                    <div className="navbar-flags">
                        <a className="navbar-flag" href="."><img src={usFlag} className="navbar-img" alt="flag"/></a>
                        <a className="navbar-flag" href="."><img src={brFlag} className="navbar-img" alt="flag"/></a>
                    </div>
                </div>
            </div>
        </header>
    )
}