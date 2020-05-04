import React from 'react';
import photo from '../images/patricartoon.jpeg'
import ProjectPage from './ProjectPage.js'
import ProjectPageEn from '../componentesEnglish/ProjectPageEn.js'
const HomePage =(props)=>{
const handleLanguages=()=>{
    props.changeLanguage()
}
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
                <h1>{`${props.currentLanguage === false ? ' - ¡HOLA!' : ' - HELLO!'}`}</h1>
            </div>
            <div className="mainPhoto">
            <img alt="profile" className="thePhoto" src={photo}></img>
            </div>
            <div className="mainIcons">
                <a  href="https://github.com/patriciaramosf"
                    target="blank">
                    <i className="fab fa-github"></i>
                </a>
                <a  href="https://www.linkedin.com/in/patricia-ramos-franco/"
                    target="blank">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a  href="mailto:patriciaramosf94@gmail.com"
                    target="blank">
                    <i className="fas fa-envelope"></i>
                </a>
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
                <div className="next">
                {props.currentLanguage === false ? <ProjectPage/> : <ProjectPageEn/>}
                </div>
            </div>
            
            
        </div>
    )
}
export default HomePage;