import aProfTeofilo from '../../assets/img/time/aProfTeofilo.png';
import aProfVinicius from '../../assets/img/time/fotoProfVinicius1.jpg';
import aProfThiago from '../../assets/img/time/aProfThiago.jpeg';
import aProfFabricio from '../../assets/img/time/aProfFabricio.jpg';
import aProfNilton from '../../assets/img/time/aProfNilton.png';

import aLindebergPessoa from '../../assets/img/time/aLindebergPessoa.jpg';
import aPatriciaMedyna from '../../assets/img/time/aPatriciaMedyna.jpg';
import aFredericoGuth from '../../assets/img/time/aFredericoGuth.jpg';
import aJoseReinaldo from '../../assets/img/time/aJoseReinaldo.jpeg';
import aPedroHenrique from '../../assets/img/time/aPedroHenrique.png';
import aMicaelFilipe from '../../assets/img/time/aMicaelFilipe.jpg';
import aCarolinaAlves from '../../assets/img/time/aCarolinaAlves.jpeg';
import aDanielSousa from '../../assets/img/time/aDanielSousa.jpeg';
import aGuilhermeMendes from '../../assets/img/time/aGuilhermeMendes.jpeg';
import aIanFilipe from '../../assets/img/time/aIanFilipe.jpg';
import aLiviaGomes from '../../assets/img/time/aLiviaGomes.PNG';
import aMatheusStauffer from '../../assets/img/time/aMatheusStauffer.jpg';
import aTatianaFranco from '../../assets/img/time/aTatianaFranco.jpg';
import aThaisReboucas from '../../assets/img/time/aThaisReboucas.jpg';
import aVitorAraruna from '../../assets/img/time/aVitorAraruna.png';
import aJonatasGomes from '../../assets/img/time/aJonatasGomes.png';
import aRafaelAmaral from '../../assets/img/time/aRafaelAmaral.png';
import aVitorVasconcelos from '../../assets/img/time/aVitorVasconcelos.png';
import aLarissaAndrade from '../../assets/img/time/aLarissaAndrade.png';
import aFelipeXavier from '../../assets/img/time/aFelipeXavier.png';
import aMariaEduarda from '../../assets/img/time/aMariaEduarda.png';
import aAliceBorges from '../../assets/img/time/aAliceBorges.jpeg';
import aArturZorron from '../../assets/img/time/aArturZorron.png';
import aLuceliaVieira from '../../assets/img/time/aLuceliaVieira.png';
import aLuisPaulo from '../../assets/img/time/aLuizPaulo.png';

import aDaviAlves from '../../assets/img/time/aDaviAlves.jpg';
import aFelipeCampos from '../../assets/img/time/aFelipeCampos.jpg';
import aGabrielFilipe from '../../assets/img/time/aGabrielFilipe.jpg';
import aJoaoLucas from '../../assets/img/time/aJoãoLucas.jpg';
import aRenatoAvellar from '../../assets/img/time/aRenatoAvellar.jpeg';
import aIsaqueAlves from '../../assets/img/time/aIsaqueAlves.jpg';
import aKhalilCarsten from '../../assets/img/time/aKhalilCarsten.png';
import aLeonardoMaffei from '../../assets/img/time/aLeonardoMaffei.jpg';

const teachers = [
    {
        name: 'Teófilo Emídio de Campos',
        avatar: aProfTeofilo,
        descr: {
            resume: 'Principal Investigator & PhD in Information Engineering',
            email: 'teodecampos@unb.br',
            github: 'https://github.com/teodecampos',
            page: 'https://cic.unb.br/~teodecampos/',
            badge: 'Professor Adjunto - UnB',
            lattes: 'http://lattes.cnpq.br/5052452346402051'
        }
    },
    {
        name: 'Thiago de Paulo Faleiros',
        avatar: aProfThiago,
        descr: {
            resume: 'co-PI & Doutor em Ciência da Computação',
            email: 'thiagodepaulo@unb.br',
            github: 'https://github.com/thiagodepaulo',
            badge: 'Professor Adjunto - UnB',
            lattes: 'http://lattes.cnpq.br/1193412523364471'
        }
    },
    {
        name: 'Vinicius Ruela Pereira Borges',
        avatar: aProfVinicius,
        descr: {
            resume: 'Doutor em Ciência da Computação e Matemática Computacional',
            email: 'viniciusrpb@unb.br',
            page: 'http://viniciusrpb.byethost6.com/',
            github: 'https://github.com/viniciusrpb',
            badge: 'Professor Adjunto - UnB',
            lattes: 'http://lattes.cnpq.br/1841593572448050'
        }
    },
    
    {
        name: 'Fabrício Ataides Braz',
        avatar: aProfFabricio,
        descr: {
            resume: 'Doutor em Engenharia Elétrica',
            email: 'fabraz@unb.br',
            github: 'https://github.com/fabraz',
            page: 'http://softwareseguro.blogspot.com/',
            badge: 'Professor Adjunto - UnB',
            lattes: 'http://lattes.cnpq.br/1841593572448050'
        }
    },
    {
        name: 'Nilton Correia da Silva',
        avatar: aProfNilton,
        descr: {
            resume: 'Doutor em Processamento de Dados e Análise Ambiental',
            email: 'niltoncs@unb.br',
            page: 'http://fga.unb.br/nilton.silva',
            github: 'https://github.com/fabraz',
            badge: 'Professor Adjunto - UnB',
            lattes: 'http://lattes.cnpq.br/5916642485883241'
        }
    },
    {
        name: 'Luis Paulo',
        avatar: aLuisPaulo,
        descr: {
            resume: 'Doutor em Ciência da Computação',
            email: 'luis.garcia@unb.br',
            linkedin: 'https://www.linkedin.com/in/lu%C3%ADs-paulo-faina-garcia-60b87b7/',
            github: 'https://github.com/lpfgarcia',
            badge: 'Aluno da Graduação - UnB',
            lattes: 'http://lattes.cnpq.br/1607852138156562'
        }
    },
]

const students = [
    {
        name: 'Lindeberg Pessoa Leite',
        avatar: aLindebergPessoa,
        descr: {
            resume: 'Doutorando em Informática',
            email: 'lindpessoa@gmail.com',
            linkedin: 'https://www.linkedin.com/in/lindeberg-leite-029618aa/',
            badge: 'Perito Criminal Federal',
            lattes: 'http://lattes.cnpq.br/5942436715284954'
        }
    },
    {
        name: 'Patrícia Medyna Drumond',
        avatar: aPatriciaMedyna,
        descr: {
            resume: 'Doutoranda em Informática',
            email: 'patriciamedyna@gmail.com',
            linkedin: 'https://www.linkedin.com/in/patricia-drumond-285b5231/',
            badge: ' Professora Adjunta II - UFPI',
            lattes: 'http://lattes.cnpq.br/4139401241377019'
        }
    },
    {
        name: 'Frederico Guth',
        avatar: aFredericoGuth,
        descr: {
            resume: 'Mestrando em Ciência da Computação',
            email: 'fredguth@fredguth.com',
            linkedin: 'https://www.linkedin.com/in/fredguth/',
            github: 'https://github.com/fredguth',
            badge: 'Diretor Presidente da REMOTO Tecnologia',
            lattes: 'http://lattes.cnpq.br/1350650095882051'
        }
    },
    {
        name: 'José Reinaldo Neto',
        avatar: aJoseReinaldo,
        descr: {
            resume: 'Mestrando em Ciência da Computação',
            email: 'josereinaldoneto@gmail.com',
            linkedin: 'https://www.linkedin.com/in/jos%C3%A9-reinaldo-neto-630457b9/',
            github: 'https://github.com/avio11',
            badge: 'Aluno de Mestrado - UnB',
            lattes: 'http://lattes.cnpq.br/2808772465575284'
        }
    },
    {
        name: 'Pedro Henrique Luz de Araújo',
        avatar: aPedroHenrique,
        descr: {
            resume: 'Mestrando em Ciência da Computação',
            email: 'josereinaldoneto@gmail.com',
            linkedin: 'https://www.linkedin.com/in/pedro-henrique-luz-de-araujo-7b9255143/',
            github: 'https://github.com/peluz',
            badge: 'Aluno de Mestrado - UnB',
            lattes: 'http://lattes.cnpq.br/8374005378743328'
        }
    },
    {
        name: 'Micael Filipe Ribeiro de Lima',
        avatar: aMicaelFilipe,
        descr: {
            resume: 'Mestrando em Ciência da Computação',
            email: 'micael.filippe@gmail.com',
            linkedin: 'https://www.linkedin.com/in/micaelfilipee/',
            github: 'https://github.com/micaelfilipee',
            badge: 'Aluno de Mestrado - UnB',
            lattes: 'http://lattes.cnpq.br/0099792934712718'
        }
    },
    {
        name: 'Lucelia Vieira',
        avatar: aLuceliaVieira,
        descr: {
            resume: 'Graduando em Ciência da Computação',
            email: 'jonatasgomesb@gmail.com',
            linkedin: 'https://www.linkedin.com/in/j%C3%B4natas-gomes-142982193/',
            github: 'https://github.com/jonatas1n',
            badge: 'Aluno da Graduação - UnB',
        }
    },
    {
        name: 'Carolina Alves Okimoto',
        avatar: aCarolinaAlves,
        descr: {
            resume: 'Especializada em Gestão de Recursos Humanos',
            email: 'carolinaalves@unb.br',
            page: 'http://nido.unb.br/carolinaalves@unb.br',
            linkedin: 'https://www.linkedin.com/in/carolina-alves-okimoto-b3598232/',
            badge: 'Secretária Executiva CiC/UnB',
            lattes: 'http://lattes.cnpq.br/7500862454896523'
        }
    },
    {
        name: 'Daniel Sousa',
        avatar: aDanielSousa,
        descr: {
            resume: 'Graduando em Engenharia de Software',
            email: 'danie_sousa.unb@outlook.com',
            linkedin: 'https://www.linkedin.com/in/dansousamelo',
            github: 'https://github.com/dansousamelo',
            badge: 'Aluno da Graduação - UnB',
            lattes: 'http://lattes.cnpq.br/3129851141271942'
        }
    },
    {
        name: 'Guilherme Mendes Pereira',
        avatar: aGuilhermeMendes,
        descr: {
            resume: 'Graduando em Engenharia de Software',
            email: 'guimendesp12@gmail.com',
            linkedin: 'https://www.linkedin.com/in/guilhermemendespereira/',
            github: 'https://github.com/guilherme-mendes',
            badge: 'Aluno da Graduação - UnB',
            lattes: 'http://lattes.cnpq.br/9680791206239457'
        }
    },
    {
        name: 'Ian filipe Pontes Ferreira',
        avatar: aIanFilipe,
        descr: {
            resume: 'Graduando em Engenharia de Software',
            email: 'ianfillipe@gmail.com',
            linkedin: 'https://www.linkedin.com/in/ian-fillipe-pontes-ferreira-1a22a017a/',
            github: 'https://github.com/IanFPFerreira',
            badge: 'Aluno da Graduação - UnB',
            lattes: 'http://lattes.cnpq.br/8650848815833056'
        }
    },
    {
        name: 'Lívia Gomes Costa Fonseca',
        avatar: aLiviaGomes,
        descr: {
            resume: 'Graduanda em Engenharia Mecatrônica',
            email: 'liviagcf@gmail.com',
            github: 'https://github.com/Liviagcf',
            badge: 'Aluna da Graduação - UnB',
            lattes: 'http://lattes.cnpq.br/4924609011551885'
        }
    },
    {
        name: 'Matheus Stauffer Viana de Oliveira',
        avatar: aMatheusStauffer,
        descr: {
            resume: 'Graduando em Computação',
            email: 'matheusvostauffer@gmail.com',
            linkedin: 'https://www.linkedin.com/in/matheus-stauffer-698b3b161/',
            github: 'https://github.com/MatheusStauffer',
            badge: 'Aluno da Graduação - UnB',
            lattes: 'http://lattes.cnpq.br/3634456971616689'
        }
    },
    {
        name: 'Tatiana Franco Pereira',
        avatar: aTatianaFranco,
        descr: {
            resume: 'Graduanda em Ciência da Computação',
            email: 'fpereira.tatiana@gmail.com',
            linkedin: 'https://www.linkedin.com/in/tatiana-franco-pereira/',
            badge: 'Aluna da Graduação - UnB',
            lattes: 'http://lattes.cnpq.br/6503681647703666'
        }
    },
    {
        name: 'Thais Rebouças Araujo',
        avatar: aThaisReboucas,
        descr: {
            resume: 'Graduanda em Engenharia de Software',
            email: 'thaysreb@gmail.com',
            linkedin: 'https://www.linkedin.com/in/thais-rebou%C3%A7as-643906174/',
            github: 'https://github.com/Thais-ra',
            badge: 'Aluna da Graduação - UnB',
            lattes: 'http://lattes.cnpq.br/1986622079746658'
        }
    },
    {
        name: 'Vitor Araruna',
        avatar: aVitorAraruna,
        descr: {
            resume: 'Graduando em Ciência da Computação',
            email: 'contato.vitorararuna@gmail.com',
            linkedin: 'https://www.linkedin.com/in/vitorararuna/',
            github: 'https://github.com/vitorararuna',
            badge: 'Aluno da Graduação - UnB',
        }
    },
    {
        name: 'Jônatas Gomes',
        avatar: aJonatasGomes,
        descr: {
            resume: 'Graduando em Ciência da Computação',
            email: 'jonatasgomesb@gmail.com',
            linkedin: 'https://www.linkedin.com/in/j%C3%B4natas-gomes-142982193/',
            github: 'https://github.com/jonatas1n',
            badge: 'Aluno da Graduação - UnB',
            lattes: 'http://lattes.cnpq.br/4021049557685903'
        }
    },
    {
        name: 'Rafael Amaral',
        avatar: aRafaelAmaral,
        descr: {
            resume: 'Graduando em Ciência da Computação',
            email: 'amarals16@hotmail.com',
            github: 'https://github.com/notopoloko',
            badge: 'Aluno da Graduação - UnB',
            lattes: 'http://lattes.cnpq.br/8939995054167023'
        }
    },
    {
        name: 'Vitor Vasconcelos',
        avatar: aVitorVasconcelos,
        descr: {
            resume: 'Graduando em Ciência da Computação',
            email: 'vitorvasconcelos05062000@gmail.com',
            linkedin: 'https://www.linkedin.com/in/vitor-vasconcelos-o-9b4582208/',
            github: 'https://github.com/VitorVVO',
            badge: 'Aluno da Graduação - UnB',
            lattes: 'http://lattes.cnpq.br/6832480867808781'
        }
    },
    {
        name: 'Larissa Andrade',
        avatar: aLarissaAndrade,
        descr: {
            resume: 'Graduando em Ciência da Computação',
            email: 'lari1415@hotmail.com',
            linkedin: 'https://www.linkedin.com/in/larissa-santana-de-freitas-andrade-175165187/',
            github: 'https://github.com/Lary15',
            badge: 'Aluna da Graduação - UnB',
            lattes: 'http://lattes.cnpq.br/7021320053516597'
        }
    },
    {
        name: 'Felipe Xavier',
        avatar: aFelipeXavier,
        descr: {
            resume: 'Graduando em Ciência da Computação',
            email: 'jonatasgomesb@gmail.com',
            linkedin: 'https://www.linkedin.com/in/felipe-xavier-barbosa/',
            github: 'https://github.com/felipexbds',
            badge: 'Aluno da Graduação - UnB',
            lattes: 'http://lattes.cnpq.br/7176105305396610'
        }
    },
    {
        name: 'Maria Eduarda',
        avatar: aMariaEduarda,
        descr: {
            resume: 'Graduanda em Ciência da Computação',
            email: 'lacwerda@gmail.com',
            linkedin: 'https://www.linkedin.com/in/lacwerda',
            github: 'https://github.com/lacwerda',
            badge: 'Aluna da Graduação - UnB',
            lattes: 'http://lattes.cnpq.br/1770064410330224'
        }
    },
    {
        name: 'Alice Borges',
        avatar: aAliceBorges,
        descr: {
            resume: 'Graduando em Ciência da Computação',
            email: 'aliceborges42.ab@gmail.com',
            linkedin: 'https://www.linkedin.com/in/alice-borges-9865021b0/',
            github: 'https://github.com/aliceborges42',
            badge: 'Aluna da Graduação - UnB',
            lattes: 'http://lattes.cnpq.br/8953434392714679'
        }
    },
    {
        name: 'Artur Zorron',
        avatar: aArturZorron,
        descr: {
            resume: 'Graduando em Ciência da Computação',
            email: 'tucazorron@gmail.com',
            linkedin: 'https://www.linkedin.com/in/tucazorron/',
            github: 'https://github.com/tucazorron',
            badge: 'Aluno da Graduação - UnB',
            lattes: 'http://lattes.cnpq.br/5813097820555507'
        }
    },
]

const exStudents = [
    {
        name: 'Davi Alves Bezerra',
        avatar: aDaviAlves,
        descr: {
            resume: 'Undergraduate in Software Engineering',
            email: 'davialvb@gmail.com',
            linkedin: 'https://www.linkedin.com/in/davi-alves/',
            github: 'https://github.com/davialvb',
            badge: 'Undergraduate student - UnB',
            lattes: 'http://lattes.cnpq.br/5153131796013571'
        }
    },
    {
        name: 'Felipe Campos de Almeida',
        avatar: aFelipeCampos,
        descr: {
            resume: 'Undergraduate in Software Engineering',
            email: 'fepas.unb@gmail.com',
            linkedin: 'https://www.linkedin.com/in/fepas/',
            github: 'https://github.com/fepas',
            badge: 'Undergraduate student - UnB',
            lattes: 'http://lattes.cnpq.br/0128125997736406'
        }
    },
    {
        name: 'Gabriel Filipe Manso Araujo',
        avatar: aGabrielFilipe,
        descr: {
            resume: 'Undergraduate in Software Engineering',
            email: 'gmanso@mit.edu',
            linkedin: 'https://www.linkedin.com/in/gabrielfilipe7/',
            github: 'https://github.com/gabrielfilipe7unb',
            badge: 'Undergraduate student - UnB',
            lattes: 'http://lattes.cnpq.br/5440834569202112'
        }
    },
    {
        name: 'João Lucas Fragoso Zarbiélli',
        avatar: aJoaoLucas,
        descr: {
            resume: 'Undergraduate in Software Engineering',
            email: 'jlfz06@gmail.com',
            linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-lucas-zarbi%C3%A9lli-6115bb172',
            github: 'https://github.com/zarbielli',
            badge: 'Undergraduate student - UnB',
            lattes: 'http://lattes.cnpq.br/1074793942340359'
        }
    },
    {
        name: 'Renato Avellar Nobre',
        avatar: aRenatoAvellar,
        descr: {
            resume: 'Graduanda em Ciência da Computação',
            email: 'rekanobre@gmail.com',
            linkedin: 'https://www.linkedin.com/in/rk-nobre/',
            github: 'http://github.com/Skalwalker',
            badge: 'Undergraduate student - UnB',
            lattes: 'http://lattes.cnpq.br/9026115437295958'
        }
    },
    {
        name: 'Isaque Alves de Lima',
        avatar: aIsaqueAlves,
        descr: {
            resume: 'Graduando em Engenharia de Software',
            email: 'isaquealvesdl@gmail.com',
            linkedin: 'https://www.linkedin.com/in/isaque-alves-02453112a/',
            github: 'https://github.com/alvesisaque',
            badge: 'Aluno da Graduação - UnB',
            lattes: 'http://lattes.cnpq.br/1705157743369545'
        }
    },
    {
        name: 'Khalil Carsten do Nascimento',
        avatar: aKhalilCarsten,
        descr: {
            resume: 'Graduando em Ciência da Computação',
            email: 'khalil.carsten@gmail.com',
            linkedin: 'https://www.linkedin.com/in/khalil-carsten-783317162/',
            github: 'https://github.com/Khalil09',
            badge: 'Aluno da Graduação - UnB',
            lattes: 'http://lattes.cnpq.br/5911001965510322'
        }
    },
    {
        name: 'Leonardo Maffei da Silva',
        avatar: aLeonardoMaffei,
        descr: {
            resume: 'Graduando em Ciência da Computação',
            email: 'leoitu22hotmail.com@gmail.com',
            linkedin: 'https://www.linkedin.com/in/leonardo-maffei-ti/',
            github: 'https://github.com/maffei2443',
            badge: 'Aluno da Graduação - UnB',
            lattes: 'http://lattes.cnpq.br/3155443125935015'
        }
    },
]

export { teachers, students, exStudents }