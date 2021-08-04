import unbLogo from '../../assets/img/Logo_UnB.svg'
import fapLogo from '../../assets/img/logo_fapdf.png'
import finatecLogo from '../../assets/img/logo_finatec.png'
import './partners.css'

export default function Partners(){
    return (
        <section className="partners">
            <div className="container">
                <h2><b>Partners</b></h2>
                <div className="partners-img">
                    <a href="https://www.unb.br/">
                        <img src={unbLogo} className="unb-logo" alt="Universidade de Brasília" />
                    </a>
                    <a href="http://www.fap.df.gov.br/">
                        <img src={fapLogo} alt="Fundação de Apoio à Pesquisa no Distrito Federal" />
                    </a>
                    <a href="http://www.fap.df.gov.br/">
                        <img src={finatecLogo} alt="Fundação de Empreendimentos Científicos e Tecnológicos"/>
                    </a>
                </div>
            </div>
        </section>
    )
}