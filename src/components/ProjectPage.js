import React from 'react';
import icon from '../images/mistake.png'

const ProjectPage =()=>{
    return(
        <div className="ProjectPage">
            <div className="projectCard one">
               <div className="projectCardTop oneTop">
                   <img className="iconProjectOne" alt="rick and morty" src={icon}/>
                   </div> 
                   <div className="projectCardBottom oneBottom">
                       <div className="project__info">
                        <h3>Nombre del proyecto</h3>
                        <p>Herramientas usadas</p>
                        <p>Utilidad</p>
                       </div>
                   </div> 
            </div>
        </div>
    )
}
export default ProjectPage;