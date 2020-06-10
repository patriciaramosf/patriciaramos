import React from 'react';
import ProjectItem from './ProjectItem.js';
import projects from './../data/projects.js';

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
