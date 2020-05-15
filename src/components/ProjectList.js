import React from 'react';
import projects from './../data/projects.js'
import ProjectItem from './ProjectItem.js'
const ProjectList =(props)=>{
    return(
        <>
        {   
            projects.filter(project=>project.type===props.filter)
            .map(project=>{
                return(
                <ProjectItem    id={project.id}
                />
                )
            })
        }
        </>
    )
    
}

export default ProjectList;