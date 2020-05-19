import React from 'react';
import ProjectList from './ProjectList.js';
import FilteredButtons from './FilteredButtons.js'
import filteredButtons from './../data/filteredButtons.js'

const ProjectPage =(props)=>{
    const {currentLanguage, filter, setFilter, setReset} = props;
    const handleAllProjects = () => {
        props.setReset()
    }

    return(
        <div className="ProjectPage">
            <div className="containerProject">
            <div className="projects__titleContainer">
                    <h2 className="projects__title">
                        {`${currentLanguage === 'es' ? 'PROYECTOS -' : 'PROJECTS -'}`}
                    </h2>
                    <div className="allbuttons">
                        <button     className='btn'
                                    onClick={ handleAllProjects }
                                    id='all'> 
                                    All
                        </button>
                        { 
                            filteredButtons
                            .map(button=>{
                                return(
                                <FilteredButtons    filter={filter}
                                                    setFilter={setFilter}
                                                    setReset={setReset}
                                                    currentLanguage={currentLanguage}
                                                    button={button}
                                                    key={button.id}
                                />
                                )
                            })

                        }
                    </div>
            </div>
           
            <ProjectList    filter={props.filter}
                            currentLanguage={props.currentLanguage}
            />
        </div>
        </div>
    )
}
export default ProjectPage;