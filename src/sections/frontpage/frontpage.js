import { Parallax } from 'react-parallax';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

import knedleLogo from '../../assets/img/logo_knedle.svg';
import unbLogo from '../../assets/img/unb_logo_b.svg';
import fapLogo from '../../assets/img/logo_fapdf.png';
import finatecLogo from '../../assets/img/logo_finatec.png';
import backgroundImg from '../../assets/img/backgroung2.jpg';

import './frontpage.css'

export default function FrontPage(props) {
    var t = props.translationFunction
    var showAlert = false

    const scrollTo = () => {
        const offsetTop = document.querySelector('.events').offsetTop
        window.scrollTo({ top: offsetTop - 71, behavior: 'smooth' })
    }

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
                                <h4>IV Workshop do NIDO</h4>
                            </div>
                            <div className="alert-body">
                                <a href="#"><h5 onClick={scrollTo}>Clique aqui para saber mais</h5></a>
                            </div>
                        </div>
                    )}
                    <div className="frontpage-brands">
                        <img src={unbLogo} className="unbLogo" alt="UNB Logo"/>
                        <img src={fapLogo} className="unbLogo" alt="FAP Logo"/>
                        <img src={finatecLogo} className="unbLogo" alt="Fundação de Empreendimentos Científicos e Tecnológicos"/>
                    </div>
                    <FontAwesomeIcon className="iconDown" size="3x" icon={faChevronDown}/>
                </div>
            </section>
        </Parallax>
    )
}