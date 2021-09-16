import './contact.css'
import githubIcon from '../../assets/img/iconGithub.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons'

export default function Contact(props){
    var t = props.translationFunction
    
    const transparenciaUrl = "https://conveniar.finatec.org.br/Portaltransparencia/Default.aspx?txtNomeProjeto=&txtNomePessoaResponsavel=teofilo&txtNomePessoaFinanciador=&txtDataAssinatura=&ddlCodStatusConvenio=10&ddlFiltroClassificacao=0&pagina=projetos#projetos"

    return (
        <section className="contact">
            <div className="container contact-content">
                <h5 className="description">
                {t('The project “KnEDLe - Knowledge Extraction from Documents of Legal content” is a partnership among FAPDF (Fundação de Apoio à Pesquisa do Distrito Federal), UnB (the University of Brasília) and Finatec (Fundação de Empreendimentos Científicos e Tecnológicos), sponsored by FAPDF.')}
                </h5>
                <div className="contact-us">
                    <h3>{t("Contact Us")}</h3>
                    <p>ask_knedle@googlegroups.com</p>
                </div>
                <div className="contact-links">
                    <a href={transparenciaUrl} className="sidebar-item link">
                        <FontAwesomeIcon icon={faBalanceScale} />
                        {t('Transparency')}
                    </a>
                </div>
                <p>University of Brasilia, Department of Computer Science</p>
                <a href="https://github.com/UnB-KnEDLe">
                    <img src={githubIcon} alt="GitHub" />
                </a>
            </div>
        </section>
    )
}