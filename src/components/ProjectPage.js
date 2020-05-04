import React from 'react';
import icon from '../images/mistake.png'
import icon1 from '../images/pantera.png'
import icon2day from '../images/day.png'
import icon2night from '../images/night.png'

const ProjectPage =(props)=>{
    return(
        <div className="ProjectPage">
            <div className="aside">
            <p className="linkTabletProject">{`${props.currentLanguage === false ? ' HOME -' : ' HOMEE -'}`}</p>
            </div>
            <div className="main">
            <div className="projectCard one">
               <div className="projectCardTop oneTop">
                   <img className="iconProjectOne" alt="rick and morty" src={icon}/>
                   </div> 
                   <div className="projectCardBottom oneBottom">
                       <div className="project__info">
                        <h3 className="project__info--title">Rick and Morty App</h3>
                        <p className="project__info--tools">React - JavaScript - SASS</p>
                        <p className="project__info--description">Busca a tus personajes favoritos de la serie.</p>
                       </div>
                       <div className="cardIcons">
                       <a href="https://github.com/patriciaramosf/modulo-3-evaluacion-final-patriciaramosf"><i className="fas fa-code"></i></a>
                       <a href="http://beta.adalab.es/modulo-3-evaluacion-final-patriciaramosf/#/"><i className="fas fa-tablet-alt"></i></a>
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
                        <p className="project__info--description">Personaliza tu tarjeta y compártela en Twitter.</p>
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
                   <img className="iconProjectThree" alt="darkMode" src={icon2day}/>
                   <img className="iconProjectThreeNight" alt="darkMode" src={icon2night}/>
                   </div> 
                   <div className="projectCardBottom threeBottom">
                       <div className="project__info">
                        <h3 className="project__info--title">Dark Mode</h3>
                        <p className="project__info--tools">JavaScript - CSS</p>
                        <p className="project__info--description">Modo noche versión COVID19.</p>
                       </div>
                       <div className="cardIcons">
                        <a  target="blank"
                            href="https://github.com/patriciaramosf/dark-mode">
                            <i className="fas fa-code"></i>
                        </a>
                       <a   target="blank" 
                            href="https://patriciaramosf.github.io/dark-mode/">
                            <i className="fas fa-tablet-alt"></i>
                        </a>
                       </div>
                   </div>
            </div>
            </div>
        </div>
    )
}
export default ProjectPage;