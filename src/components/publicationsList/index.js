import visnoteAbstract from '../../assets/papers/VisNote_Abstract.pdf';
import araujo from '../../assets/papers/8_Araujo.pdf';
import release_3 from '../../assets/papers/Relat_rio_KnEDLe___release_3.pdf';

/*
    Arquivos hospedados no repositório do site devem
    ser referenciados por importação, como exemplificado acima.
*/

const publicationsList = [
    {
        title: 'LayoutQT—Layout Quadrant Tags to embed visual features for document analysis',
        content: ['• Patricia Medyna Lauritzen de Lucena Drumond • Lindeberg Pessoa Leite • Fabricio A. Braz • Teofilo E. de Campos'],
        link: [{title: 'Link', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0952197623002750?dgcid=rss_sd_all'}],
        section: 'Articles'
    },
    {
        title: 'Sequence-aware multimodal page classification of Brazilian legal documents',
        content: ['• Pedro H. Luz de Araujo • Ana Paula G. S. de Almeida • Fabricio A. Braz • Nilton C. da Silva • Flavio de Barros Vidal • Teofilo E. de Campos'],
        link: [{title: 'Link', url: 'https://arxiv.org/abs/2207.00748?context=cs'}],
        section: 'Articles'
    },
    {
        title: 'Aprendizado de maquina para a sugestão automática de correções em anotações de dados textuais',
        content: ['• Tatiana F. Pereira • Vinícius R. P. Borges'],
        link: [{title: 'PDF', url: 'https://github.com/UnB-KnEDLe/viabilidade-tecnica/blob/main/PIBIC_2022___Relat_rio_Final___Tatiana.pdf'}, {title: 'certificate', url: 'https://proic.unb.br/images/Editais/2021_2022/Congresso2022/MencaoHonrosa/MencaoHonrosa-269.pdf'}],
        section: 'PIBIC'
    },
    {
        title: 'KnEDLe/NIDO Project Partial Technical Report 5',
        content: ['• Thiago de Paulo Faleiros • Vinícius R. P. Borges • Luís P. F. Garcia • Carolina Alves Okimoto • Ricardo Marcacini • Andrei Lima Queiroz • Alice Borges'],
        link: [{title: 'PDF', url: 'https://github.com/UnB-KnEDLe/viabilidade-tecnica/blob/main/Relat_rio_KnEDLe___release_5.pdf'}],
        section: 'Technical Reports'
    },
    {
        title: 'Named Entity Recognition Approaches Applied to Legal Document Segmentation.',
        content: ['SILVA, F. ; GUIMARAES, G. ; QUEIROZ, A. ; BORGES, V. R. P. ; FALEIROS, THIAGO ; GARCIA, L. ; MARCACIN, R. M. ', 'In: Symposium on Knowledge Discovery, Mining and Learning -- KDMILE 22, 2022.'],
        link: [{title:'certificate', url: 'https://github.com/UnB-KnEDLe/viabilidade-tecnica/blob/main/premio_felipe.jpeg'}],
        section: 'Articles'
    },
    {
        title: 'On the use of Query by Committee for Human-in-the-Loop Named Entity Recognition.',
        content: ['NOGUEIRA, G. S.; OLIVEIRA, V. V.; MARCACINI, R.', 'In: Symposium on Knowledge Discovery, Mining and Learning -- KDMILE 22, 2022.'],
        link: [],
        section: 'Articles'
    },
    {
        title: 'Data Augmented 3D Semantic Scene Completion With 2D Segmentation Priors',
        content: [
            '• Aloisio Dourado • Frederico Guth • Teófilo E. de Campos',
            'IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), 2022'
        ],
        link: [{title: 'Link', url: 'https://openaccess.thecvf.com/content/WACV2022/html/Dourado_Data_Augmented_3D_Semantic_Scene_Completion_With_2D_Segmentation_Priors_WACV_2022_paper.html'}],
        section: 'Articles'
    },
    {
        title: 'Learn by Guessing: Multi-step Pseudo-label Refinement for Person Re-Identification',
        content: [
            '• Tiago de C. G. Pereira • Teófilo E. de Campos',
            '17th International Joint Conference on Computer Vision, Imaging and Computer Graphics Theory and Aplications'
        ],
        link: [{title: 'Link', url: 'https://www.insticc.org/node/TechnicalProgram/visigrapp/2022/presentationDetails/108435'}],
        section: 'Articles'
    },
    {
        title: 'KnEDLe/NIDO Project Partial Technical Report 4',
        content: ['• Vinícius R. P. Borges • Thiago de Paulo Faleiros • Fabrício A. Braz • Nilton Correia Silva • Carolina Alves Okimoto • Alice Borges • Luís P. F. Garcia • Marcelo Mandelli'],
        link: [{title: 'PDF', url: 'https://github.com/UnB-KnEDLe/viabilidade-tecnica/blob/main/Relat_rio_KnEDLe___release_4.pdf'}],
        section: 'Technical Reports'
    },
    {
        title: 'KnEDLe/NIDO Project Partial Technical Report 3',
        content: ['• Tatiana Franco Pereira • Matheus Stauffer Viana de Oliveira  • Isaque Alves • Vinícius R. P. Borges • Thiago de Paulo Faleiros • Fabrício A. Braz • Nilton Correia Silva • Carolina Alves Okimoto • Teófilo E. de Campos'],
        link: [{title: 'PDF', url: release_3}],
        section: 'Technical Reports'
    },
    {
        title: ' Domain-specific datasets for document classification and named entity recognition',
        content: [
            'MSc thesis',
            'Author • Pedro Henrique Luz de Araujo',
            'Supervisor • Teófilo E. de Campos, University of Brasilia',
            'Committee • Alexandre Rademaker (IBM and FGV) • Thiago de Paulo Faleiros (UnB)'
        ],
        link: [{title: 'Web page', url: 'https://cic.unb.br/~teodecampos/peluz/'}],
        section: 'Dissertations'
    },
    {
        title: 'KnEDLe/NIDO Project Partial Technical Report 2',
        content: ['• Isaque Alves • Vinícius R. P. Borges • Thiago de Paulo Faleiros • Pedro H. Luz de Araujo • Frederico Guth • Lívia Fonseca • Tatiana Pereira • Carolina Alves Okimoto • Teófilo E. de Campos'],
        link: [{title: 'PDF', url: 'https://cic.unb.br/~teodecampos/KnEDLe/reports/knedle_release_2.pdf'}],
        section: 'Technical Reports'
    },
    {
        title: 'Topic Modelling Brazilian Supreme Court Lawsuits',
        content: [
            '• Pedro H. Luz de Araujo • Teófilo E. de Campos',
            '33rd International Conference on Legal Knowledge and Information Systems (JURIX 2020)'
        ],
        link: [{title: 'PDF', url: araujo}],
        section: 'Articles'
    },
    {
        title: 'VisNote: A Tool For Interactive Visual Exploration And Text Annotation Of Government Gazettes',
        content: ['• Tatiana F. Pereira • Lívia G. C Fonseca • Matheus S. V. de Oliveira • Teofilo E. Campos • Vinícius R. P. Borges', '33rd International Conference on Graphics, Patterns and Images (SIBGRAPI 2020)'],
        link: [{title: 'Abstract', url: visnoteAbstract}],
        section: 'Articles'
    },
    {
        title: 'Topic Modelling Brazilian Supreme Court Lawsuits',
        content: ['• Pedro H. Luz de Araujo • Teófilo E. de Campos', '33rd International Conference on Legal Knowledge and Information Systems (JURIX 2020)'],
        link: [{title: 'PDF', url: araujo}],
        section: 'Articles'
    },
    {
        title: 'Inferring The Source Of Official Texts: Can SVM Beat ULMFiT?',
        content: ['• Pedro H. Luz de Araujo • Teófilo E. de Campos • Marcelo M. Silva de Sousa', 'PROPOR 2020 - International Conference on the Computational Processing of Portuguese'],
        link: [
            {title: 'Bibtex', url: 'https://cic.unb.br/~teodecampos/KnEDLe/propor2020/luz_de_araujo_etal_propor2020.bib'},
            {title: 'PDF', url: 'https://cic.unb.br/~teodecampos/KnEDLe/propor2020/luz_de_araujo_etal_propor2020.pdf'},
            {title: 'All', url: 'https://cic.unb.br/~teodecampos/KnEDLe/propor2020/'}
        ],
        section: 'Articles'
    },
    {
        title: 'Victor: A Dataset For Brazilian Legal Documents Classification',
        content: ['• Pedro Henrique Luz de Araujo • Teófilo Emídio de Campos • Fabricio Ataides Braz • Nilton Correia da Silva', 'Language Resources and Evaluation Conference (LREC)'],
        link: [
            {title: 'Bibtex', url: 'https://cic.unb.br/~teodecampos/ViP/lrec/luz_etal_victor_lrec2020.bib'},
            {title: 'PDF', url: 'https://cic.unb.br/~teodecampos/ViP/lrec/luz_etal_lrec2020.pdf'},
            {title: 'All', url: 'https://cic.unb.br/~teodecampos/ViP/lrec/'}
        ],
        section: 'Articles'
    },
    {
        title: 'KnEDLe/NIDO Project Partial Technical Report 1',
        content: ['• Teófilo E. de Campos • Thiago de Paulo Faleiros • Vinícius R. P. Borges • Isaque Alves • Carolina Alves Okimoto'],
        link: [{title: 'PDF', url: 'https://cic.unb.br/~teodecampos/KnEDLe/reports/knedle_release_1.pdf'}],
        section: 'Technical Reports'
    },
    {
        title: 'The Information Bottleneck Theory Of Deep Learning',
        content: [
            'MSc qualification exam',
            'Author • Frederico Guth',
            'Supervisor • Teófilo E. de Campos, University of Brasilia',
            'Committee • John Shawe-Taylor (UCL) • Moacir Ponti (USP) • Thiago de Paulo Faleiros (suplente - UnB)'
        ],
        link: [
            {title: 'MSc qualification report (33.7MB)', url: 'https://cic.unb.br/~teodecampos/fred_guth/guth_msc_qualify_unb_2020.pdf'},
            {title: 'Slides (8.5MB)', url: 'https://cic.unb.br/~teodecampos/fred_guth/guth_msc_qualify_unb_2020_slides.pdf'}
        ],
        section: 'Dissertations'
    },
    {
        title: 'From Documents To Entities: A Journey Through Natural Language Processing Tasks And Domains',
        content: [
            'MSc Qualification Exam',
            'Author • Pedro Luz',
            'Supervisor • Teófilo E. de Campos, University of Brasilia',
            'Committee • Alexandre Rademaker (FGV and IBM) • Thiago de Paulo Faleiros (UnB)'
        ],
        link: [
            {title: 'MSc qualification report (882KB)', url: 'https://cic.unb.br/~teodecampos/peluz/luz_de_araujo_MSc_qualify.pdf'},
            {title: 'Slides (1.5MB)', url: 'https://cic.unb.br/~teodecampos/peluz/luz_de_araujo_MSc_qualify_slides.pdf'},
            {title: 'All', url: 'https://cic.unb.br/~teodecampos/peluz/'}
        ],
        section: 'Dissertations'
    },

]

export default publicationsList;
