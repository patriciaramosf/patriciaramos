const PROJECTS =[
    {
        id:1,
        type:'react',
        style: {
            container:'animate__animated animate__fadeIn projectCard five',
            top:'projectCardTop fiveTop',
            bottom:'projectCardBottom fiveBottom',
        },
        image: {
            class:'iconPortfolio',
            alt:'portfolio',
            src:'./images/cartoon.png',
        },
        text: {
            es: {
                name:'Portfolio',
                tools:'React - Sass - Router',
                description:'Echa un vistazo al código de esta página.',
            },
            en: {
                nameEn:'Portfolio',
                tools:'React - Sass - Router',
                description:'Check the code of this project.',
            },
        },
        links: {
            code:'https://github.com/patriciaramosf/patriciaramos',
            web:null,
        },
    },
    {
        id:2,
        type:'react',
        style: {
            container:'animate__animated animate__fadeIn projectCard one',
            top:'projectCardTop oneTop',
            bottom:'projectCardBottom oneBottom',
        },
        image: {
            class:'iconProjectOneDesk',
            alt:'rick and morty',
            src:'./images/sticker.png',
        },
        text: {
            es: {
                name:'Rick and Morty App',
                tools:'React - Sass - APIs - Router',
                description:'Buscador de personajes de la serie.',
            },
            en: {
                nameEn:'Rick and Morty App',
                tools:'React - Sass - APIs - Router',
                description:'Find your favourite character of the tv serie with this App.',
            }
        },
        links: {
            code:'https://github.com/patriciaramosf/modulo-3-evaluacion-final-patriciaramosf',
            web:'http://beta.adalab.es/modulo-3-evaluacion-final-patriciaramosf/#/',
        },
    },
    {
        id:3,
        type:'javascript',
        style: {
            container:'animate__animated animate__fadeIn projectCard two2',
            top:'projectCardTop twoTop2',
            bottom:'projectCardBottom twoBottom2',
        },
        image: {
            class:'iconProjectTwo2',
            alt:'virtual cards',
            src:'./images/mygiphy.png',
        },
        text: {
            es: {
                name:'Generador de tarjetas',
                tools:'JavaScript - APIs - Sass',
                description:'App para personalizar tarjetas y compartirlas en Twitter.',
            },
            en: {
                nameEn:'Card Generator',
                tools:'JavaScript - APIs - Sass',
                description:'Get your personal card and share it on Twitter.',
            }
        },
        links: {
            code:'https://github.com/patriciaramosf/project-promo-i-module-2-team-3-afternoon',
            web:'http://beta.adalab.es/project-promo-i-module-2-team-3-afternoon/',
        },
    },
    {
        id:4,
        type:'react',
        style: {
            container:'animate__animated animate__fadeIn projectCard two',
            top:'projectCardTop twoTop',
            bottom:'projectCardBottom twoBottom',
        },
        image: {
            class:'iconProjectTwo',
            alt:'virtual cards',
            src:'./images/pantera.png',
        },
        text: {
            es: {
                name:'Proyecto de código heredado',
                tools:'React - Sass - LocalStorage',
                description:'Migración de Javascript a React JS. #darkMode.',
            },
            en: {
                nameEn:'Legacy Code Project',
                tools:'React - Sass - LocalStorage',
                description:'Migration from Javascript to React JS #darkMode.',
            }
        },
        links: {
            code:'https://github.com/patriciaramosf/project-promo-i-module-3-team-1-new',
            web:'http://beta.adalab.es/project-promo-i-module-3-team-1-new/#/',
        },
    },
    {
        id:5,
        type:'layout',
        style: {
            container:'animate__animated animate__fadeIn projectCard three',
            top:'projectCardTop threeTop',
            bottom:'projectCardBottom threeBottom',
        },
        image: {
            class:'iconProjectThree',
            alt:'collapsingMargins',
            src:'./images/responsive.png',
        },
        text: {
            es: {
                name:'Collapsing Margins',
                tools:'HTML - Sass',
                description:'Web responsive, primer proyecto grupal en Adalab.',
            },
            en: {
                nameEn:'Collapsing Margins',
                tools:'HTML - Sass',
                description:'My first project at Adalab, a responsive design Web.',
            }
        },
        links: {
            code:'https://github.com/patriciaramosf/Collapsing-margins-Web__Adalab-Project',
            web:'http://beta.adalab.es/project-promo-i-module-1-team-3-afternoon-final/',
        },
    },
    {
        id:6,
        type:'javascript',
        style: {
            container:'animate__animated animate__fadeIn projectCard four',
            top:'projectCardTop fourTop',
            bottom:'projectCardBottom fourBottom',
        },
        image: {
            class:'iconProjectfour',
            alt:'movie search',
            src:'./images/pixar.png',
        },
        text: {
            es: {
                name:'Buscador de películas',
                tools:'Javascript - Sass - APIs',
                description:'Buscador de películas y series.',
            },
            en: {
                nameEn:'Movie Search',
                tools:'Javascript - Sass - APIs',
                description:'Search your favourite movie.',
            }
        },
        links: {
            code:'https://github.com/patriciaramosf/find-movies-from-api',
            web:'https://patriciaramosf.github.io/find-movies-from-api/',
        },
    },
    
]
export default PROJECTS;