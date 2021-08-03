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
                    <img src={unbLogo} className="unb-logo" alt="Universidade de Brasília" />
                    <img src={fapLogo} alt="Fundação de Apoio à Pesquisa no Distrito Federal" />
                    <img src={finatecLogo} alt="Fundação de Empreendimentos Científicos e Tecnológicos"/>
                </div>
            </div>
        </section>
    )
}