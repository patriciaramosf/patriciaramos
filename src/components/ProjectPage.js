import React from 'react';
import ProjectList from './ProjectList.js'

const ProjectPage =(props)=>{
    const handleProjects = (event) => {
        props.showProjects(event.currentTarget.id)
    }
    const handleAllProjects =()=> props.showAllProjects()

    return(
        <div className="ProjectPage">
            <div className="containerProject">
            <div className="projects__titleContainer">
                    <h2 className="projects__title">
                        {`${props.currentLanguage === false ? 'PROYECTOS -' : 'PROJECTS -'}`}
                    </h2>
            </div>
            <div className="allbuttons">
                <button     className="btn btnall"
                            onClick={handleAllProjects}
                            id="btnAll"> 
                            {`${props.currentLanguage === false ? 'Todo' : 'All'}`}
                </button>
                <button     className="btn btnJavascript"
                            onClick={handleProjects}
                            id="btnJavascript"> 
                            JavaScript
                </button>
                <button     className="btn btnReact"
                            onClick={handleProjects}
                            id="btnReact">
                            React
                </button>
                <button     className="btn btnLayout"
                            onClick={handleProjects}
                            id="btnLayout">
                            {`${props.currentLanguage === false ? 'Maquetación' : 'Layout'}`}       
                </button>
            </div>
            <ProjectList    filter={props.filter}
            />
        </div>
        </div>
    )
}
export default ProjectPage;