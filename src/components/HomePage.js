import React from 'react';
import photo from '../images/patricartoon.jpeg'
import ProjectPage from './ProjectPage.js'
const HomePage =()=>{
    return(
        <div className="HomePage">
            <div className="mainTitle">
                <h1>- ¡Hola!</h1>
            </div>
            <div className="mainPhoto">
            <img alt="profile" className="thePhoto" src={photo}></img>
            </div>
            <div className="mainIcons">
                <i className="fab fa-github"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fas fa-envelope"></i>
                <i className="fas fa-question-circle"></i>
            </div>
            <div className="mainText">
                <p>
                    <span className="myweb">Patricia Ramos Frontend Developer</span>
                </p>
            </div>
            <div className="stepToProjects">
                <div className="projects__titleContainer">
                    <h2 className="projects__title">PROYECTOS -</h2>
                </div>
            </div>
            <ProjectPage></ProjectPage>
        </div>
    )
}
export default HomePage;