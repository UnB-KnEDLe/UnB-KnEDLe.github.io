const eventsList = [
    {
        title: 'III Workshop',
        button : {
            title: 'Click here to join the videoconference', 
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        },
        comment: '',
        date: new Date(2021, 8, 6),
        schedule: [
            '14:00 - Opening - Thiago Faleiros',
            '14:10 - Deep Active-Self learning applied to NER - José Reinaldo',
            '14:30 - DODFMiner - Thiago Faleiros',
            '14:50 - Annotation of Personnel Acts - Vinícius Borges',
            '15:10 - Visnote - Tatiana Franco Pereira',
            '15:30 - Bids and Contracts Timeline - Nilton Correia',
            '15:50 - Next Steps Planning',
            '16:00 - Closing'
        ],
    },
    {
        title: 'II Workshop',
        button : {
            title: 'Click here to watch the video', 
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        },
        comment: 'This event took place in February 2020, and its video recording is available from the link above.',
        date: new Date(2021, 2, 11),
        schedule: [
            '14:00 - Opening - Teófilo de Campos',
            '14:10 - DodfMiner - Khalil Carsten',
            '14:40 - NidoTat - Lívia Fonseca e Matheus Stauffer',
            '15:10 - VisNote - Tatiana Franco',
            '15:25 - Paper summary accepted on JURIX - Pedro Luz',
            '15:40 - Next Steps',
            '16:00 - Closing'
        ],
        
    },
    {
        title: 'I Workshop',
        button : {
            title: 'Click here to watch the video',
            url: 'https://www.youtube.com/watch?v=Q1bZIpFc5PY'
        },
        comment: 'This event took place in July 2020, and its video recording is available from the link above.',
        date: new Date(2020, 7, 23),
        schedule: [
            '14:00 - Opening - Gladston da Silva e Teófilo de Campos',
            '14:15 - Publication at PROPOR 2020 - Pedro Luz',
            '14:45 - ToolBox - Thiago de Paulo, Khalil Carsten e Renato Nobre',
            '15:30 - Strategies for DODF text annotation - Vinicius Borges',
            '15:45 - Round Table',
            '16:00 - Closing'
        ]
    }
].sort( (a, b) => a.date < b.date )

export { eventsList }

