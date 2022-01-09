import { Parallax } from 'react-parallax';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

import knedleLogo from '../../assets/img/logo_knedle.svg';
import unbLogo from '../../assets/img/unb_logo_b.svg';
import backgroundImg from '../../assets/img/backgroung2.jpg';
import fapLogo from '../../assets/img/logo_fapdf.png';

import edital from '../../assets/papers/editaL_KnEDLe_032021_retificacao.pdf'

import './frontpage.css'

export default function FrontPage(props) {
    var t = props.translationFunction

    var today = new Date()
    var showAlert = false

    return (
        <Parallax bgImage={backgroundImg} strength={300} className="frontpage">
            <section className="frontpage">
                <div className="container frontpage-content">
                    <div className="frontpage-logo">
                        <img src={knedleLogo} alt="Knedle Logo"/>
                        <div style={{textAlign: 'center'}} >
                            <h4>Knowledge Extraction from Documents of Legal content</h4>
                            <h4>{t('Knowledge Extraction from Documents of Legal content')}</h4>
                        </div>
                    </div>
                    { showAlert && (
                        <div className="alert">
                            <div className="alert-header">
                                <FontAwesomeIcon icon={faExclamationCircle} size="2x" />
                                <h4>Edital de seleção de bolsista de graduação aberto</h4>
                            </div>
                            <div className="alert-body">
                                <a href={edital} target="_blank" rel="noreferrer"><h5>Clique aqui para saber mais</h5></a>
                                <p><b>As inscrições vão até o dia 22 de outubro</b></p>
                            </div>
                        </div>
                    )}
                    <div className="frontpage-brands">
                        <img src={unbLogo} className="unbLogo" alt="UNB Logo"/>
                        <img src={fapLogo} className="unbLogo" alt="UNB Logo"/>
                    </div>
                    <FontAwesomeIcon className="iconDown" size="3x" icon={faChevronDown}/>
                </div>
            </section>
        </Parallax>
    )
}