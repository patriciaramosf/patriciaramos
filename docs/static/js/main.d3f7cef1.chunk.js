(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,a,t){e.exports=t(33)},26:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(14),c=t.n(o),i=(t(26),t(15)),s=t(16),l=t(20),m=t(19),d=[{id:0,type:"javascript",style:{container:"animate__animated animate__fadeIn projectCard zero",top:"projectCardTop zeroTop",bottom:"projectCardBottom zeroBottom"},image:{class:"iconProjectZero",alt:"ecommerce",src:"./images/sushi.png"},text:{es:{name:"Sushi Ecommerce",tools:"Javascript - CSS - Bootstrap - LocalStorage",description:"Simulaci\xf3n de tienda Online, en la que podr\xe1s a\xf1adir y quitar productos del carrito, calcular la suma total, y guardar tu compra."},en:{name:"Sushi Ecommerce",tools:"Javascript - CSS - Bootstrap - LocalStorage",description:"Add sushi to your cart and get hungry."}},links:{code:"https://github.com/patriciaramosf/ecommerce",web:"https://patriciaramosf.github.io/ecommerce/"}},{id:1,type:"react",style:{container:"animate__animated animate__fadeIn projectCard five",top:"projectCardTop fiveTop",bottom:"projectCardBottom fiveBottom"},image:{class:"iconPortfolio",alt:"portfolio",src:"./images/cartoon.png"},text:{es:{name:"Portfolio",tools:"React - Sass - Router",description:"Este portfolio ha sido creado con React y es una peque\xf1a muestra de mi continuo aprendizaje."},en:{name:"Portfolio",tools:"React - Sass - Router",description:"Check the code of this project."}},links:{code:"https://github.com/patriciaramosf/patriciaramos",web:null}},{id:2,type:"react",style:{container:"animate__animated animate__fadeIn projectCard one",top:"projectCardTop oneTop",bottom:"projectCardBottom oneBottom"},image:{class:"iconProjectOneDesk",alt:"rick and morty",src:"./images/sticker.png"},text:{es:{name:"Rick and Morty App",tools:"React - Sass - API Rest - Router",description:"Buscador de personajes de la serie, en el que podr\xe1s filtrar por sus nombres."},en:{name:"Rick and Morty App",tools:"React - Sass - API Rest - Router",description:"Find your favourite character of the tv serie with this App."}},links:{code:"https://github.com/patriciaramosf/modulo-3-evaluacion-final-patriciaramosf",web:"http://beta.adalab.es/modulo-3-evaluacion-final-patriciaramosf/#/"}},{id:3,type:"javascript",style:{container:"animate__animated animate__fadeIn projectCard two2",top:"projectCardTop twoTop2",bottom:"projectCardBottom twoBottom2"},image:{class:"iconProjectTwo2",alt:"virtual cards",src:"./images/mygiphy.png"},text:{es:{name:"Generador de tarjetas",tools:"JavaScript - API Rest - Sass",description:"Con esta App podr\xe1s crear tarjetas personalizadas con tus datos, y compartirlas a trav\xe9s de Twitter directamente desde la app."},en:{name:"Card Generator",tools:"JavaScript - API Rest - Sass",description:"Get your personal card and share it on Twitter."}},links:{code:"https://github.com/patriciaramosf/project-promo-i-module-2-team-3-afternoon",web:"http://beta.adalab.es/project-promo-i-module-2-team-3-afternoon/"}},{id:4,type:"react",style:{container:"animate__animated animate__fadeIn projectCard two",top:"projectCardTop twoTop",bottom:"projectCardBottom twoBottom"},image:{class:"iconProjectTwo",alt:"virtual cards",src:"./images/toggle.png"},text:{es:{name:"Proyecto de c\xf3digo heredado",tools:"React - Sass - LocalStorage",description:"Migraci\xf3n de un proyecto Javascript a React JS, en el que tambi\xe9n se a\xf1adi\xf3 el modo noche como mejora."},en:{name:"Legacy Code Project",tools:"React - Sass - LocalStorage",description:"Migration from Javascript to React JS #darkMode."}},links:{code:"https://github.com/patriciaramosf/project-promo-i-module-3-team-1-new",web:"http://beta.adalab.es/project-promo-i-module-3-team-1-new/#/"}},{id:5,type:"layout",style:{container:"animate__animated animate__fadeIn projectCard three",top:"projectCardTop threeTop",bottom:"projectCardBottom threeBottom"},image:{class:"iconProjectThree",alt:"collapsingMargins",src:"./images/responsive.png"},text:{es:{name:"Collapsing Margins",tools:"HTML - Sass",description:"Web responsive, en la que se muestran los datos de contacto y la informaci\xf3n personal de cada una de las persona que creamos la p\xe1gina."},en:{name:"Collapsing Margins",tools:"HTML - Sass",description:"My first project at Adalab, a responsive Website."}},links:{code:"https://github.com/patriciaramosf/Collapsing-margins-Web__Adalab-Project",web:"http://beta.adalab.es/project-promo-i-module-1-team-3-afternoon-final/"}}],p=function(e){var a=e.project,t=e.currentLanguage,n=a.style,o=a.image,c=a.text,i=a.links;return r.a.createElement("div",{className:n.container},r.a.createElement("div",{className:n.top},r.a.createElement("img",{className:o.class,alt:o.alt,src:o.src})),r.a.createElement("div",{className:n.bottom},r.a.createElement("div",{className:"project__info"},r.a.createElement("h3",{className:"project__info--title"},c[t].name),r.a.createElement("p",{className:"project__info--tools"},c[t].tools),r.a.createElement("p",{className:"project__info--description animate__fadeInRight"},c[t].description)),r.a.createElement("div",{className:"cardIcons animate__fadeInRight"},r.a.createElement("a",{target:"blank",href:i.code},r.a.createElement("i",{className:"fas fa-code"})),!!i.web&&r.a.createElement("a",{target:"blank",href:i.web},r.a.createElement("i",{className:"fas fa-laptop"})))))},u=function(e){return r.a.createElement(r.a.Fragment,null,d.filter((function(a){return null===e.filter||a.type===e.filter})).map((function(a){return r.a.createElement(p,{key:a.id,project:a,currentLanguage:e.currentLanguage})})))},g=function(e){var a=e.button,t=a.id,n=a.text;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:a.class,onClick:function(){e.setFilter(a.id)},id:t},n[e.currentLanguage]))},f=[{id:"javascript",class:"btn",text:{es:"JavaScript",en:"JavaScript"}},{id:"react",class:"btn",text:{es:"React",en:"React"}},{id:"layout",class:"btn",text:{es:"Maquetaci\xf3n",en:"Layout"}}],b=function(e){var a=e.currentLanguage,t=e.filter,n=e.setFilter,o=e.setReset;return r.a.createElement("div",{className:"ProjectPage"},r.a.createElement("div",{className:"containerProject"},r.a.createElement("div",{className:"projects__titleContainer"},r.a.createElement("h2",{className:"projects__title"},"".concat("es"===a?"- PROYECTOS":"- PROJECTS")),r.a.createElement("div",{className:"allbuttons"},r.a.createElement("button",{className:"btn",onClick:function(){e.setReset()},id:"all"},"All"),f.map((function(e){return r.a.createElement(g,{filter:t,setFilter:n,setReset:o,currentLanguage:a,button:e,key:e.id})})))),r.a.createElement(u,{filter:e.filter,currentLanguage:e.currentLanguage})))},h={es:{title:"\xa1Hola!",introduction:"Tras varias experiencias en el sector del Marketing Digital, decid\xed formarme en Adalab como desarrolladora frontend.",description:"Soy de Madrid, me considero una persona alegre, curiosa y colaborativa, y estoy buscando un trabajo en el que poder aportar y aprender a diario.",hobbies:{title:"Me encanta",firstHobbie:"reir",secondHobbie:"comer",thirdHobbie:"Stackoverflow",fourthHobbie:"The Office"}},en:{title:"Hello!",introduction:"After several experiences in Digital Marketing, I decided to learn coding at Adalab.",description:"I\xb4m from Madrid, I consider myself a happy, curious and collaborative person, and I\xb4m looking for a job where I can put all my skills and learn everyday.",hobbies:{title:"I love",firstHobbie:"laughing",secondHobbie:"eating",thirdHobbie:"Stackoverflow",fourthHobbie:"The Office US"}}},E=function(e){var a=e.currentLanguage,t=e.filter,n=e.setFilter,o=e.setReset;return r.a.createElement("div",{className:"HomePage"},r.a.createElement("div",{className:"containerHomePage"},r.a.createElement("div",{className:"mainTitle"},r.a.createElement("h1",null,h[a].title)),r.a.createElement("div",{className:"mainIcons"},r.a.createElement("a",{href:"https://github.com/patriciaramosf",target:"blank"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/patricia-ramos-franco/",target:"blank"},r.a.createElement("i",{className:"fab fa-linkedin-in"})),r.a.createElement("a",{href:"mailto:patriciaramosf94@gmail.com",target:"blank"},r.a.createElement("i",{className:"fas fa-envelope"}))),r.a.createElement("div",{className:"mainText"},r.a.createElement("p",null,r.a.createElement("span",{className:"myweb"},"Patricia Ramos",r.a.createElement("br",null)),r.a.createElement("span",{className:"myJob"},"Frontend Developer")),r.a.createElement("p",{className:"description description1"},h[a].introduction),r.a.createElement("p",{className:"description"},h[a].description),r.a.createElement("p",{className:"description"},h[a].hobbies.title),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"".concat("es"===a?"content__container":"content__containerEn")},r.a.createElement("ul",{className:"content__container__list"},r.a.createElement("li",{className:"content__container__list__item"},h[a].hobbies.firstHobbie),r.a.createElement("li",{className:"content__container__list__item"},h[a].hobbies.secondHobbie),r.a.createElement("li",{className:"content__container__list__item"},h[a].hobbies.thirdHobbie),r.a.createElement("li",{className:"content__container__list__item"},h[a].hobbies.fourthHobbie))),r.a.createElement("div",{className:"icon-scroll"}))),r.a.createElement("div",{className:"stepToProjects"},r.a.createElement("div",{className:"next"},r.a.createElement(b,{currentLanguage:a,filter:t,setFilter:n,setReset:o})))))},_=t(7),v=function(e){var a=e.currentLanguage,t=e.switchLanguage,n=e.text,o=e.link,c=e.textEn;return r.a.createElement("div",{className:"aside"},r.a.createElement("div",{className:"languageToggle"},r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",checked:t,onChange:function(){e.changeLanguage()}}),r.a.createElement("span",{className:"slider round"}))),r.a.createElement(_.b,{to:o},r.a.createElement("button",{className:"asidebtn"},"".concat("es"===a?n:c))),r.a.createElement("div",{className:"mainIconsAside"},r.a.createElement("a",{href:"https://github.com/patriciaramosf",target:"blank"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/patricia-ramos-franco/",target:"blank"},r.a.createElement("i",{className:"fab fa-linkedin-in"})),r.a.createElement("a",{href:"mailto:patriciaramosf94@gmail.com",target:"blank"},r.a.createElement("i",{className:"fas fa-envelope"}))))},j=(t(32),t(5)),y=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).changeLanguage=function(){var e="en"===n.state.currentLanguage?"es":"en",a=!1===n.state.switchLanguage;n.setState({currentLanguage:e,switchLanguage:a})},n.setFilter=function(e){n.setState({filter:e})},n.setReset=function(){n.setFilter(null)},n.state={currentLanguage:"en",filter:null,switchLanguage:!1},n}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state,a=e.currentLanguage,t=e.filter,n=e.switchLanguage,o=this.setFilter,c=this.setReset,i=this.changeLanguage;return r.a.createElement("div",{className:"App"},r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/"},r.a.createElement(v,{changeLanguage:i,currentLanguage:a,switchLanguage:n,text:"Proyectos",textEn:"Projects",link:"/projects"}),r.a.createElement(E,{changeLanguage:i,currentLanguage:a,filter:t,setFilter:o,setReset:c})),r.a.createElement(j.a,{exact:!0,path:"/projects"},r.a.createElement(v,{changeLanguage:i,currentLanguage:a,switchLanguage:n,text:"Hola",textEn:"Hello",link:"/"}),r.a.createElement(b,{changeLanguage:i,currentLanguage:a,filter:t,setFilter:o,setReset:c}))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_.a,null,r.a.createElement(y,null))),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.d3f7cef1.chunk.js.map