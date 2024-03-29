const eventsList = [
  {
    title: "VI Workshop",

    comment:
      "This event will take place on March 24, 2023, in the TCDF auditorium - Federal District Court of Auditors. - Palácio Costa e Silva, Praça do Buriti 70075-901 - Brasília, DF",

    date: new Date(2023, 3, 24),
    schedule: [
      "14h00 - Opening - Thiago Faleiros",
      "14h10 - The Knedle Project - Vinícius Borges, Luis Paulo Faina and Andrei Queiroz",
      "Annotation, NitoTat and VisNote",
      "DODFMiner and Knedash",
      "14h30 - DODFMiner CLI - Gabriel Guimarães",
      "14h50 - DODFMiner Lib - Bruno Esteves",
      "15h10 - Knedash and Timeline - Ian F. P. Ferreira",
      "15h30 - Discussions and Closing",
    ],
  },
  {
    title: "V Workshop",
    button: [
      {
        title: "Click here to watch the video",
        url: "https://bit.ly/workshop_nido",
      },
    ],

    comment:
      "This event will take place on July 29, 2022, and the meeting can be accessed via the link above.",
    subscription: [
      {
        text:"Subscription for KnEDLe Project V Workshop. Subscription is required to obtain the certificate issued by the TCDF",
        url:"https://escon.tc.df.gov.br/cursos/novo/evento/visualizar/1209"
      }
    ],
    date: new Date(2022, 7, 29),
    schedule: [
      "14h00 - Opening - Thiago Faleiros",
      "14h10 - Knedash - Jonatas G. B. da Silva",
      "14h30 - Label Studio - Gabriel Nogueira and Vitor Vasconcelos",
      "14h50 - DODFKge - Rafael A. Soares",
      "15h10 - Bids and Contracts - Gabriel M. C. Guimarães and Ian F. P. Ferreira",
      "15h30 - Discussions and Closing",
    ],
  },
  {
    title: "IV Workshop",
    button: [
      {
        title: "Click here to watch the video",
        url: "https://youtu.be/WC82VLMWk0k",
      },
    ],
    comment:
      "This event took place in February 2022, and its video recording is available from the link above.",
    date: new Date(2022, 2, 11),
    schedule: [
      "14h00 - Opening - Thiago Faleiros",
      "14h10 - DODFMiner - Vitor Araruna",
      "14h30 - DODFKge - Rafael Amaral",
      "14h50 - Bids and Contracts Timeline - Daniel de Sousa",
      "15h20 - Closing",
    ],
  },
  {
    title: "III Workshop",
    button: [
      {
        title: "Click here to watch the video",
        url: "https://youtu.be/QaR8eQKyeJo",
      },
    ],
    comment:
      "This event took place in August 2021, and its video recording is available from the link above.",
    date: new Date(2021, 8, 6),
    schedule: [
      "14h00 - Opening - Teo de Campos and Thiago Faleiros",
      "14h10 - DODFMiner - Thiago Faleiros",
      "14h30 - Deep Active-Self learning applied to NER - José Reinaldo",
      "14h50 - Annotation of Personnel Acts - Vinícius Borges",
      "15h10 - Visnote - Tatiana Franco Pereira",
      "15h30 - Bids and Contracts Timeline - Nilton Correia",
      "15h50 - Next Steps Planning",
      "16h00 - Closing",
    ],
  },
  {
    title: "II Workshop",
    button: [
      {
        title: "Click here to watch the video",
        url: "https://www.youtube.com/watch?v=I6-Q4Y37WWY&feature=youtu.be",
      },
    ],
    comment:
      "This event took place in February 2021, and its video recording is available from the link above.",
    date: new Date(2021, 2, 11),
    schedule: [
      "14h00 - Opening - Teófilo de Campos",
      "14h10 - DodfMiner - Khalil Carsten",
      "14h40 - NidoTat - Lívia Fonseca e Matheus Stauffer",
      "15h10 - VisNote - Tatiana Franco",
      "15h25 - Paper summary accepted on JURIX - Pedro Luz",
      "15h40 - Next Steps",
      "16h00 - Closing",
    ],
  },
  {
    title: "I Workshop",
    button: [
      {
        title: "Click here to watch the video",
        url: "https://www.youtube.com/watch?v=Q1bZIpFc5PY",
      },
    ],
    comment:
      "This event took place in July 2020, and its video recording is available from the link above.",
    date: new Date(2020, 7, 23),
    schedule: [
      "14h00 - Opening - Gladston da Silva e Teófilo de Campos",
      "14h15 - Publication at PROPOR 2020 - Pedro Luz",
      "14h45 - ToolBox - Thiago de Paulo, Khalil Carsten e Renato Nobre",
      "15h30 - Strategies for DODF text annotation - Vinicius Borges",
      "15h45 - Round Table",
      "16h00 - Closing",
    ],
  },
].sort((a, b) => a.date < b.date);

export { eventsList };
