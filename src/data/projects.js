const PROJECTS =[
    {
        id:0,
        type:'javascript',
        style: {
            container:'animate__animated animate__fadeIn projectCard zero',
            top:'projectCardTop zeroTop',
            bottom:'projectCardBottom zeroBottom',
        },
        images: {
            general: {
                class:'iconProjectZero',
                alt:'ecommerce',
                src:'./images/sushi.png',
            },
            detail: {
                class:'iconProjectZero',
                alt:'ecommerce',
                src:'./images/sushi.png',
            },
            
        },
        text: {
            es: {
                name:'Sushi Ecommerce',
                tools:'Javascript - CSS - Bootstrap - LocalStorage',
                description:'Simulación de tienda Online, en la que podrás añadir y quitar productos del carrito, calcular la suma total, y guardar tu compra gracias a LocalStorage.'
            },
            en: {
                name:'Sushi Ecommerce',
                tools:'Javascript - CSS - Bootstrap - LocalStorage',
                description:'Online store simulation, where you can add and remove products from the cart, calculate the total amount, and save your purchase through LocalStorage.',
            }
        },
        links: {
            code:'https://github.com/patriciaramosf/ecommerce',
            web:'https://patriciaramosf.github.io/ecommerce/',
        },
    },
    {
        id:1,
        type:'react',
        style: {
            container:'animate__animated animate__fadeIn projectCard five',
            top:'projectCardTop fiveTop',
            bottom:'projectCardBottom fiveBottom',
        },
        images: {
            general: {
                class:'iconPortfolio',
                alt:'portfolio',
                src:'./images/cartoon.png',
            },
            detail: {
                class:'iconPortfolio',
                alt:'portfolio',
                src:'./images/cartoon.png',
            },
            },
        text: {
            es: {
                name:'Portfolio',
                tools:'React - Sass - React Router',
                description:'Este portfolio ha sido creado con React y es una pequeña muestra de mi continuo aprendizaje.',
            },
            en: {
                name:'Portfolio',
                tools:'React - Sass - React Router',
                description:'I built this project with React and its a small sample of my continuous learning.',
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
        images: {
            general: {
                class:'iconProjectOneDesk',
                alt:'rick and morty',
                src:'./images/sticker.png',
            },
            detail: {
                class:'iconProjectOneDesk',
                alt:'rick and morty',
                src:'./images/sticker.png',
            },
        },
        text: {
            es: {
                name:'Rick and Morty App',
                tools:'React - Sass - API REST - React Router',
                description:'Buscador de personajes de la serie, en el que podrás filtrar por sus nombres de una manera divertida.',
            },
            en: {
                name:'Rick and Morty App',
                tools:'React - Sass - API REST - React Router',
                description:'Character search of Rick and Morty TV serie. This app is a funny way to find your favourite character and to filter them by name.',
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
        images: {
            general: {
                class:'iconProjectTwo2',
                alt:'virtual cards',
                src:'./images/mygiphy.png',
            },
            detail: {
                class:'iconProjectTwo2',
                alt:'virtual cards',
                src:'./images/mygiphy.png',
            },
        },
        text: {
            es: {
                name:'Generador de tarjetas',
                tools:'JavaScript - API REST - Sass - LocalStorage',
                description:'Con esta App podrás crear tarjetas personalizadas con todos tus datos de contacto, generar un link para poder compartirlo de la manera que prefieras, o incluso través de Twitter directamente desde la app.',
            },
            en: {
                name:'Card Generator',
                tools:'JavaScript - API REST - Sass - LocalStorage',
                description:'Through this app you could create your own card, filled with all your personal details, and share it on Twitter.',
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
        images: {
            general: {
                class:'iconProjectTwo',
                alt:'virtual cards',
                src:'./images/toggle.png',
            },
            detail: {
                class:'iconProjectTwo',
                alt:'virtual cards',
                src:'./images/toggle.png',
            },
        },
        text: {
            es: {
                name:'Proyecto de código heredado',
                tools:'React - Sass - LocalStorage',
                description:'Migración de un proyecto Javascript a React JS, en el que también se añadió el modo noche como mejora.',
            },
            en: {
                name:'Legacy Code Project',
                tools:'React - Sass - LocalStorage',
                description:'Migration from Javascript to React JS. Dark Mode was added too, as an improvement for usability of the app.',
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
        images: {
            general: {
                class:'iconProjectThree',
                alt:'collapsingMargins',
                src:'./images/responsive.png',
            },
            detail: {
                class:'iconProjectThree',
                alt:'collapsingMargins',
                src:'./images/responsive.png',
            },
        },
        text: {
            es: {
                name:'Collapsing Margins',
                tools:'HTML - Sass',
                description:'Web responsive, en la que se muestran los datos de contacto y la información personal de cada una de las persona que creamos la página. Este fue mi primer proyecto en Adalab.',
            },
            en: {
                name:'Collapsing Margins',
                tools:'HTML - Sass',
                description:'My first project at Adalab, a responsive Website.',
            }
        },
        links: {
            code:'https://github.com/patriciaramosf/Collapsing-margins-Web__Adalab-Project',
            web:'http://beta.adalab.es/project-promo-i-module-1-team-3-afternoon-final/',
        },
    },
    
]
export default PROJECTS;