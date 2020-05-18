import React from 'react';
import ProjectList from './ProjectList.js'

const ProjectPage =(props)=>{

const handleProjects = (event) => {
    props.setFilter(event.currentTarget.id)
}
const handleAllProjects = () => {
    props.setReset()
}

    return(
        <div className="ProjectPage">
            <div className="containerProject">
            <div className="projects__titleContainer">
                    <h2 className="projects__title">
                        {`${props.currentLanguage === false ? 'PROYECTOS -' : 'PROJECTS -'}`}
                    </h2>
            </div>
            <div className="allbuttons">
                <button     className="btn"
                            onClick={handleAllProjects}
                            id="all"> 
                            {`${props.currentLanguage === false ? 'Todo' : 'All'}`}
                </button>
                <button     className="btn"
                            onClick={handleProjects}
                            id="javascript"> 
                            JavaScript
                </button>
                <button     className="btn"
                            onClick={handleProjects}
                            id="react">
                            React
                </button>
                <button     className="btn"
                            onClick={handleProjects}
                            id="layout">
                            {`${props.currentLanguage === false ? 'Maquetación' : 'Layout'}`}       
                </button>
            </div>
            <ProjectList    filter={props.filter}
                            currentLanguage={props.currentLanguage}
            />
        </div>
        </div>
    )
}
export default ProjectPage;