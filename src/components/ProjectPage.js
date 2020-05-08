import React from 'react';
import icon from '../images/mistake.png'
import icon1 from '../images/pantera.png'
import responsive from '../images/responsive.png'

const ProjectPage =(props)=>{
    return(
        <div className="ProjectPage">
            <div className="projectCard one">
               <div className="projectCardTop oneTop">
                   <img className="iconProjectOne" alt="rick and morty" src={icon}/>
                   </div> 
                   <div className="projectCardBottom oneBottom">
                       <div className="project__info">
                        <h3 className="project__info--title">Rick and Morty App</h3>
                        <p className="project__info--tools">React - JavaScript - SASS</p>
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
            <div className="projectCard two">
               <div className="projectCardTop twoTop">
                   <img className="iconProjectTwo" alt="virtual cards" src={icon1}/>
                   </div> 
                   <div className="projectCardBottom twoBottom">
                       <div className="project__info">
                        <h3 className="project__info--title">Creador de tarjetas</h3>
                        <p className="project__info--tools">React - JavaScript - SASS</p>
                        <p className="project__info--description">{`${props.currentLanguage === false ? 'Personaliza tu tarjeta y compártela en Twitter.' : 'Get your personal card and share it on Twitter.'}`}</p>
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
            <div className="projectCard three">
               <div className="projectCardTop threeTop">
                   <img className="iconProjectThree" alt="darkMode" src={responsive}/>
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
        </div>
    )
}
export default ProjectPage;