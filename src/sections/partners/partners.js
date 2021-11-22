import unbLogo from '../../assets/img/Logo_UnB.svg'
import fapLogo from '../../assets/img/logo_fapdf.png'
import finatecLogo from '../../assets/img/logo_finatec.png'
import './partners.css'

export default function Partners(props){
    var t = props.translationFunction

    return (
        <section className="partners">
            <div className="container">
                <h2><b>{t('Partners')}</b></h2>
                <div className="partners-img">
                    <a target="_blank" href="https://www.unb.br/">
                        <img src={unbLogo} className="unb-logo" alt="Universidade de Brasília" />
                    </a>
                    <a target="_blank" href="http://www.fap.df.gov.br/">
                        <img src={fapLogo} alt="Fundação de Apoio à Pesquisa no Distrito Federal" />
                    </a>
                    <a target="_blank" href="https://www.finatec.org.br/">
                        <img src={finatecLogo} alt="Fundação de Empreendimentos Científicos e Tecnológicos"/>
                    </a>
                </div>
            </div>
        </section>
    )
}