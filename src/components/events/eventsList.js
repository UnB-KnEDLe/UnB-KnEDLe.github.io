const eventsList = [
    {
        title: 'III Workshop',
        button : {title: 'Click here to join the videoconference', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'},
        comment: '',
        date: new Date(2021, 8, 6),
        schedule: ['14:00 - Opening - Thiago Faleiros', '14:10 - Deep Active-Self learning applied to NER - José Reinaldo']
    },
    {
        title: 'II Workshop',
        button : {title: 'Click here to join the videoconference', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'},
        comment: '',
        date: new Date(2021, 2, 11),
        schedule: ['14:00 - Opening - Teófilo de Campos', '14:10 - DodfMiner - Khalil Carsten']
    }
].sort( (a, b) => a.date < b.date )

export { eventsList }