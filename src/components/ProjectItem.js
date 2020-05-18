import React from 'react';

const ProjectItem=(props)=>{
    const { project, currentLanguage } = props;
    const { style, image, text, links } = project;
    return(
         <div className={ style.container }>
        <div className={ style.top }>
            <img className={ image.class } alt={ image.alt } src={ image.src} />
            </div> 
            <div className={ style.bottom }>
                <div className="project__info">
                 <h3 className="project__info--title">{ text[currentLanguage].name }</h3>
                 <p className="project__info--tools">{ text[currentLanguage].tools }</p>
                 <p className="project__info--description">{ text[currentLanguage].description }</p>
                </div>
                <div className="cardIcons">
                <a   target="blank"
                     href={ links.code }><i className="fas fa-code"></i></a>
                {
                    !!links.web &&
                        <a   target="blank"
                        href={ links.web }><i className="fas fa-tablet-alt"></i>
                        </a>
                 }
                </div>
            </div>
     </div>

    )
}
export default ProjectItem;