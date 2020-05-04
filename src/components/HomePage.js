import React from 'react';
import photo from '../images/patricartoon.jpeg'
import ProjectPage from './ProjectPage.js'
import { Link } from 'react-router-dom';
const HomePage =(props)=>{
const handleLanguages=()=>{
    props.changeLanguage()
}
console.log(props.currentLanguage)
    return(
        <div className="HomePage">
            <div className="languageToggle">
                <label className="switch">
                    <input  type="checkbox"
                            onChange={handleLanguages}
                    />
                    <span className="slider round"/>
                </label>
            </div>
            <div className="mainTitle">
                <h1>{`${props.currentLanguage === false ? ' - ¡HOLA!' : ' - HI!'}`}</h1>
            </div>
            <div className="mainPhoto">
            <img alt="profile" className="thePhoto" src={photo}></img>
            </div>
            <div className="mainIcons">
                <i className="fab fa-github"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fas fa-envelope"></i>
            </div>
            <div className="mainText">
                <p>
                    <span className="myweb">Patricia Ramos Frontend Developer</span>
                </p>
            </div>
            <div className="stepToProjects">
                <div className="projects__titleContainer">
                    <h2 className="projects__title">{`${props.currentLanguage === false ? 'PROYECTOS -' : 'PROJECTS -'}`}</h2>
                </div>
            </div>
            <ProjectPage></ProjectPage>
            
        </div>
    )
}
export default HomePage;