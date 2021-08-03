import './contact.css'
import githubIcon from '../../assets/img/iconGithub.png'

export default function Contact(){
    return (
        <section className="contact">
            <div className="container contact-content">
                <h5 className="description">
                The project “KnEDLe - Knowledge Extraction from Documents of Legal content” is a partnership among FAPDF (Fundação de Apoio à Pesquisa do Distrito Federal), UnB (the University of Brasília) and Finatec (Fundação de Empreendimentos Científicos e Tecnológicos), sponsored by FAPDF.
                </h5>
                <div className="contact-us">
                    <h3>Contact Us</h3>
                    <p>ask_knedle@googlegroups.com</p>
                </div>
                <p>University of Brasilia, Department of Computer Science</p>
                <a href="https://github.com/UnB-KnEDLe">
                    <img src={githubIcon} alt="GitHub" />
                </a>
            </div>
            <p className="rights">© 2021, KnEDLe, Designed by Invision and Creative Tim.</p>
        </section>
    )
}