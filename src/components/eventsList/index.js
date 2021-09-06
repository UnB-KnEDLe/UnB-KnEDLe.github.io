const eventsList = [
    {
        title: 'III Workshop',
        button : [
            {
                title: 'Click here to watch the video', 
                url: 'https://youtu.be/QaR8eQKyeJo'
            }
        ],
        comment: 'This event took place in August 2021, and its video recording is available from the link above.',
        date: new Date(2021, 8, 6),
        schedule: [
            '14h00 - Opening - Teo de Campos and Thiago Faleiros',
            '14h10 - DODFMiner - Thiago Faleiros',
            '14h30 - Deep Active-Self learning applied to NER - José Reinaldo',
            '14h50 - Annotation of Personnel Acts - Vinícius Borges',
            '15h10 - Visnote - Tatiana Franco Pereira',
            '15h30 - Bids and Contracts Timeline - Nilton Correia',
            '15h50 - Next Steps Planning',
            '16h00 - Closing'
        ],
    },
    {
        title: 'II Workshop',
        button : [{
            title: 'Click here to watch the video', 
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }],
        comment: 'This event took place in February 2020, and its video recording is available from the link above.',
        date: new Date(2021, 2, 11),
        schedule: [
            '14h00 - Opening - Teófilo de Campos',
            '14h10 - DodfMiner - Khalil Carsten',
            '14h40 - NidoTat - Lívia Fonseca e Matheus Stauffer',
            '15h10 - VisNote - Tatiana Franco',
            '15h25 - Paper summary accepted on JURIX - Pedro Luz',
            '15h40 - Next Steps',
            '16h00 - Closing'
        ],
        
    },
    {
        title: 'I Workshop',
        button : [{
            title: 'Click here to watch the video',
            url: 'https://www.youtube.com/watch?v=Q1bZIpFc5PY'
        }],
        comment: 'This event took place in July 2020, and its video recording is available from the link above.',
        date: new Date(2020, 7, 23),
        schedule: [
            '14h00 - Opening - Gladston da Silva e Teófilo de Campos',
            '14h15 - Publication at PROPOR 2020 - Pedro Luz',
            '14h45 - ToolBox - Thiago de Paulo, Khalil Carsten e Renato Nobre',
            '15h30 - Strategies for DODF text annotation - Vinicius Borges',
            '15h45 - Round Table',
            '16h00 - Closing'
        ]
    }
].sort( (a, b) => a.date < b.date )

export { eventsList }

