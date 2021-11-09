const PROJECTS =[
    {
        id:0,
        type:'javascript',
        style: {
            container:'animate__animated animate__fadeIn projectCard zero',
            top:'projectCardTop zeroTop',
            bottom:'projectCardBottom zeroBottom',
        },
        image: {
            class:'iconProjectZero',
            alt:'ecommerce',
            src:'./images/sushi.png',
        },
        text: {
            es: {
                name:'Sushi Ecommerce',
                tools:'Javascript - CSS - Bootstrap - LocalStorage',
                description:'Simulación de tienda Online, en la que podrás añadir y quitar productos del carrito, calcular la suma total, y guardar tu compra.',
            },
            en: {
                name:'Sushi Ecommerce',
                tools:'Javascript - CSS - Bootstrap - LocalStorage',
                description:'Online store simulation, where you can add and remove products from the cart, calculate the total amount, and save your purchase.',
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
        image: {
            class:'iconPortfolio',
            alt:'portfolio',
            src:'./images/cartoon.png',
        },
        text: {
            es: {
                name:'Portfolio',
                tools:'React Hooks - Sass - React Router',
                description:'Este portfolio ha sido creado con React y es una pequeña muestra de mi continuo aprendizaje.',
            },
            en: {
                name:'Portfolio',
                tools:'React Hooks - Sass - React Router',
                description:'This is my portfolio, built with React, in which I upload the projects I have been developing during my learning process.',
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
            container:'animate__animated animate__fadeIn projectCard two2',
            top:'projectCardTop twoTop2',
            bottom:'projectCardBottom twoBottom2',
        },
        image: {
            class:'iconProjectTwo2',
            alt:'virtual cards',
            src:'./images/cat.png',
        },
        text: {
            es: {
                name:'Petifa',
                tools:'React Hooks - Sass - React Router',
                description:'Proyecto real para la empresa Petifa.',
            },
            en: {
                name:'Petifa',
                tools:'React Hooks - Sass - React Router',
                description:'Real project for the Petifa company.',
            }
        },
        links: {
            code:null,
            web:'http://www.petifa.pt/',
        },
    },
    {
        id:3,
        type:'layout',
        style: {
            container:'animate__animated animate__fadeIn projectCard six',
            top:'projectCardTop sixTop',
            bottom:'projectCardBottom sixBottom',
        },
        image: {
            class:'iconProjectSix',
            alt:'responsiveMenu',
            src:'./images/animation.png',
        },
        text: {
            es: {
                name:'Menu Responsive Full Screen',
                tools:'HTML - CSS - Javascript',
                description:'Menu Responsive para continuar practicando animaciones CSS y Javascript',
            },
            en: {
                name:'Full Screen Responsive Menu',
                tools:'HTML - CSS - Javascript',
                description:'Responsive Menu to continue practicing CSS and Javascript animations.',
            }
        },
        links: {
            code:'https://github.com/patriciaramosf/animated-menu',
            web:'https://patriciaramosf.github.io/animated-menu/',
        },
    },
    
]
export default PROJECTS;