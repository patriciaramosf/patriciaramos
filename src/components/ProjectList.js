import React from 'react';
import projects from './../data/projects.js';
import ProjectItem from './ProjectItem.js';

const ProjectList =(props)=>{
    return(
        <>
        {   
            projects
            .filter(project => props.filter === null || project.type === props.filter)
            .map(project=>{
                return(
                <ProjectItem    key={project.id}
                                project={project}
                                currentLanguage={props.currentLanguage}
                />
                )
            })
        }
        </>
    )
    
}

export default ProjectList;
