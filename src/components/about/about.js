import pageImage from '../../assets/img/DODF.jpg';

import './about.css'

export default function About(){
    return (
        <section className="about">
            <div className="container">
                <h1>About</h1>
                <h4>The project “KnEDLe - Knowledge Extraction from Documents of Legal content” is a partnership among <a href="http://fap.df.gov.br/">FAPDF (Fundação de Apoio à Pesquisa do Distrito Federal)</a>, <a href="https://www.unb.br/">UnB (the University of Brasília)</a> and <a href="https://www.finatec.org.br/">Finatec (Fundação de Empreendimentos Científicos e Tecnológicos)</a>, sponsored by FAPDF. This project was proposed in order to employ official publications as a research object and to extract knowledge. The objective is to develop intelligent tools for extracting structured information from such publications, aiming to facilitate the search and retrieval of information, increasing government transparency and facilitating audit tasks and detecting problems related to the use of public resources.</h4>
                <img src={pageImage} className="dodf-image" alt="DODF page example" align="right"/>
                <h4>Official publications such as the Diário Oficial do Distrito Federal (DODF) are sources of information on all official government acts. Although these documents are rich in knowledge, analysing these texts manually by specialists is a complex and unfeasible task considering the growing volume of documents, the result of the frequent number of publications in the Distrito Federal Government's (GDF) communication vehicle.</h4>
                <h4>This scenario is appropriate to employ computational techniques based on text mining and information visualization, in order to discover implicit and relevant knowledge in large textual data sets. It is known that these computational techniques receive data in a structured format. However, as DODF editions are originally published in unstructured format and in natural language, it is required to use techniques to prepare strategies in order to make the necessary adaptations to apply.</h4>
            </div>
        </section>
    )
}