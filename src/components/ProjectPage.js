import React from 'react';
import icon1 from '../images/pantera.png'
import icon4 from '../images/pixar.png'
import icongif from '../images/mygiphy.png'
import jar from '../images/sticker.png'
import responsive from '../images/responsive.png'

const ProjectPage =(props)=>{
    return(
        <div className="ProjectPage">
            <div className="containerProject">
            <div className="projects__titleContainer">
                    <h2 className="projects__title">{`${props.currentLanguage === false ? 'PROYECTOS -' : 'PROJECTS -'}`}</h2>
            </div>
            <div className="allbuttons">
                <button className="btn btnAll">{`${props.currentLanguage === false ? 'Todo' : 'All'}`}</button>
                <button className="btn btnJavascript">JavaScript</button>
                <button className="btn btnReact">React</button>
                <button className="btn btnReact">{`${props.currentLanguage === false ? 'Maquetación' : 'Layout'}`}</button>
            </div>
            <div className="projectCard one react">
               <div className="projectCardTop oneTop">
                   <img className="iconProjectOneDesk" alt="rick and morty" src={jar}/>
                   </div> 
                   <div className="projectCardBottom oneBottom">
                       <div className="project__info">
                        <h3 className="project__info--title">Rick and Morty App</h3>
                        <p className="project__info--tools">React - JavaScript - Sass</p>
                        <p className="project__info--description">{`${props.currentLanguage === false ? 'Busca a tus personajes favoritos de la serie.' : 'Find your favourite character of the tv serie with this App.'}`}</p>
                       </div>
                       <div className="cardIcons">
                       <a href="https://github.com/patriciaramosf/modulo-3-evaluacion-final-patriciaramosf"><i className="fas fa-code"></i></a>
                       <a   target="blank"
                            href="http://beta.adalab.es/modulo-3-evaluacion-final-patriciaramosf/#/"><i className="fas fa-tablet-alt"></i>
                        </a>
                       </div>
                   </div>
            </div>
            <div className="projectCard two2 javascript">
               <div className="projectCardTop twoTop2">
                   <img className="iconProjectTwo2" alt="virtual cards" src={icongif}/>
                   </div> 
                   <div className="projectCardBottom twoBottom2">
                       <div className="project__info">
                        <h3 className="project__info--title">{`${props.currentLanguage === false ? 'Generador de tarjetas' : 'Card Generator'}`}</h3>
                        <p className="project__info--tools">JavaScript - Sass</p>
                        <p className="project__info--description">{`${props.currentLanguage === false ? 'Personaliza tu tarjeta y compártela en Twitter.' : 'Get your personal card and share it on Twitter.'}`}</p>
                       </div>
                       <div className="cardIcons">
                        <a  target="blank"
                            href="https://github.com/patriciaramosf/project-promo-i-module-2-team-3-afternoon">
                            <i className="fas fa-code"></i>
                        </a>
                       <a   target="blank" 
                            href="http://beta.adalab.es/project-promo-i-module-2-team-3-afternoon/">
                            <i className="fas fa-tablet-alt"></i>
                        </a>
                       </div>
                   </div>
            </div>
            <div className="projectCard two react">
               <div className="projectCardTop twoTop">
                   <img className="iconProjectTwo" alt="virtual cards" src={icon1}/>
                   </div> 
                   <div className="projectCardBottom twoBottom">
                       <div className="project__info">
                        <h3 className="project__info--title">{`${props.currentLanguage === false ? 'Proyecto de código heredado' : 'Legacy Code Project'}`}</h3>
                        <p className="project__info--tools">React - Sass</p>
                        <p className="project__info--description">{`${props.currentLanguage === false ? 'Migración de Javascript a React JS. #darkMode' : 'Migration from Javascript to React JS #darkMode.'}`}</p>
                       </div>
                       <div className="cardIcons">
                        <a  target="blank"
                            href="https://github.com/patriciaramosf/project-promo-i-module-3-team-1-new">
                            <i className="fas fa-code"></i>
                        </a>
                       <a   target="blank" 
                            href="http://beta.adalab.es/project-promo-i-module-3-team-1-new/#/">
                            <i className="fas fa-tablet-alt"></i>
                        </a>
                       </div>
                   </div>
            </div>
            <div className="projectCard three layout">
               <div className="projectCardTop threeTop">
                   <img className="iconProjectThree" alt="collapsingMargins" src={responsive}/>
                   </div> 
                   <div className="projectCardBottom threeBottom">
                       <div className="project__info">
                        <h3 className="project__info--title">Collapsing Margins</h3>
                        <p className="project__info--tools">HTML - Sass</p>
                        <p className="project__info--description">{`${props.currentLanguage === false ? 'Mi primer projecto en Adalab, Web Responsive.' : 'My first project at Adalab, a responsive Web.'}`}</p>
                       </div>
                       <div className="cardIcons">
                        <a  target="blank"
                            href="https://github.com/patriciaramosf/Collapsing-margins-Web__Adalab-Project">
                            <i className="fas fa-code"></i>
                        </a>
                       <a   target="blank" 
                            href="http://beta.adalab.es/project-promo-i-module-1-team-3-afternoon-final/">
                            <i className="fas fa-tablet-alt"></i>
                        </a>
                       </div>
                   </div>
            </div>
            <div className="projectCard four javascript">
               <div className="projectCardTop fourTop">
                   <img className="iconProjectfour" alt="Search Films" src={icon4}/>
                   </div> 
                   <div className="projectCardBottom fourBottom">
                       <div className="project__info">
                        <h3 className="project__info--title">Buscador de películas</h3>
                        <p className="project__info--tools">JavaScript - Sass</p>
                        <p className="project__info--description">{`${props.currentLanguage === false ? 'Buscador de películas a través de API.' : 'Movie searcher.'}`}</p>
                       </div>
                       <div className="cardIcons">
                       <a href="https://github.com/patriciaramosf/find-movies-from-api"><i className="fas fa-code"></i></a>
                       <a   target="blank"
                            href="https://patriciaramosf.github.io/find-movies-from-api/"><i className="fas fa-tablet-alt"></i>
                        </a>
                       </div>
                   </div>
            </div>
            </div>
        </div>
    )
}
export default ProjectPage;