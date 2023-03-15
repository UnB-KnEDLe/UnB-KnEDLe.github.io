import DODFMinerLogo from '../../assets/img/logo_miner.png'
import KnedashLogo from '../../assets/img/knedashlogo.svg'
import LabelStudioLogo from '../../assets/img/label-studio.svg'

const toolsList = [
    {
        id: '1',
        name: 'DODFMiner',
        logo: DODFMinerLogo,
        description: "Extraction of data from documents in PDF format referring to the publications of the Official Gazette of the Federal District.",
        subtitle: "Data Extraction Library",
        documentation: "https://dodfminer.readthedocs.io/en/main/",
        github: "https://github.com/UnB-KnEDLe/DODFMiner",
        url: ''
    },
    {
        id: '2',
        name: 'Knedash',
        logo: KnedashLogo,
        description: "Through AI, Knedash performs queries and extracts acts and entities from the Official Gazette for the Federal District Court of Auditors.",
        subtitle: "The Official Gazette of the Federal District in a simple way",
        documentation: "https://unb-knedle.github.io/Dash/",
        github: "https://github.com/UnB-KnEDLe/Dash",
        url: 'http://knedash.unb.br/'
    },
    {
        id: '4',
        name: 'LabelStudio',
        logo: LabelStudioLogo,
        description: "Our tool is publicly available and can be integrated with pre-trained language models to speed up the labeling task via active learning, transfer learning and fine-tuning. We evaluated the tool considering the legal domain through the Query by Committee (QBC) method published in the article link below",
        subtitle: "Open-source Human-in-the-loop (HITL) data annotation tool for named entity recognition (NER) tasks",
        article: "https://unb-knedle.github.io/Dash/",
        github: "https://github.com/UnB-KnEDLe/active_learning_tool",
        url: 'https://labelstud.io/'
    },
    {
        id: '3',
        name: 'VisNote',
        subtitle: "A visualization-based tool developed for exploring and annotating textual data from Government Gazettes.",
        description: "A visualization tool for publications of the Official Gazette of the Federal District that mainly employs visualizations based on the positioning of points, such as t-Distributed Stochastic Neighbor Embedding (t-SNE) and Uniform Manifold Approximation and Projection (UMAP). The idea is to involve the specialist in knowledge discovery tasks in official publications with the support of visualizations that graphically represent the main implicit patterns in the associated texts.",
        // documentation: "https://unb-knedle.github.io/Dash/",
        github: "https://github.com/UnB-KnEDLe/VisNote",
        // url: 'http://knedash.unb.br/'
    },
    {
        id: '4',
        name: 'NidoTat',
        description: "This tool is useful for creating corpus for named entity recognition tasks, with support for collaborative annotation (multiple annotators) and centered on the person responsible for conducting the annotation process.",
        subtitle: "A custom annotation tool from the TeamTat tool for the purposes of the KnEDLe project. ",
        // documentation: "https://unb-knedle.github.io/Dash/",
        github: "https://github.com/UnB-KnEDLe/TeamTat",
        // url: 'http://knedash.unb.br/'
    },


]

export {toolsList}
