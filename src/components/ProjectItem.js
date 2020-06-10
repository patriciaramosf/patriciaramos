import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem=(props)=>{
    const { project, currentLanguage } = props;
    const { style, image, text, id } = project;
    return(
        <div className="containerHover">
        <Link style={{ textDecoration: 'none' }} key={id} to={`/projects/${id}`}>
            <div className={ style.container }>
                <div className={ style.top }>
                    <img className={ image.class } alt={ image.alt } src={ image.src} />
                    </div>
                    <div className={ style.bottom }>
                        <div className="project__info">
                        <h3 className="project__info--title">{ text[currentLanguage].name }</h3>
                        <p className="project__info--tools">{ text[currentLanguage].tools }</p>
                        {/* <p className="project__info--description">{ text[currentLanguage].description }</p> */}
                        </div>
                        <div className="cardIcons">
                            <i className="fas fa-long-arrow-alt-right hidden animate__fadeInRight"></i>
                    </div>
                </div>
                </div>
     </Link>
     </div>
    )
}
export default ProjectItem;