import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import knedleLogo from '../../assets/img/logo_knedle.svg';
import unbLogo from '../../assets/img/unb_logo_b.svg';

import './frontpage.css'

export default function FrontPage(props) {
    var t = props.translationFunction

    return (
        <section className="frontpage">
            <div className="container frontpage-content">
                <div className="blankspace"></div>
                <div className="frontpage-logo">
                    <img src={knedleLogo} alt="Knedle Logo"/>
                    <div style={{textAlign: 'center'}} >
                        <h4>Knowledge Extraction from Documents of Legal content</h4>
                        <h4>{t('Knowledge Extraction from Documents of Legal content')}</h4>
                    </div>
                </div>
                <img src={unbLogo} className="unbLogo" alt="UNB Logo"/>
                <FontAwesomeIcon className="iconDown" size="3x" icon={faChevronDown}/>
            </div>
        </section>
    )
}