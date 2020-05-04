import React from 'react';
import photo from '../images/patricartoon.jpeg'
import ProjectPage from './ProjectPage.js'
import ProjectPageEn from '../componentesEnglish/ProjectPageEn.js'
import {Link} from 'react-router-dom';
const HomePage =(props)=>{
const handleLanguages=()=>{
    props.changeLanguage()
}
    return(
        <div className="HomePage">
            <div className="aside">
                <Link to={`${props.currentLanguage === false ? '/proyectos' : 'projects'}`}><p className="linkTabletProject">{`${props.currentLanguage === false ? ' PROYECTOS -' : ' PROJECTS -'}`}</p></Link>
            </div>
            <div className="main">
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
                    <span className="myweb">Patricia Ramos<br></br><span className="myJob">Frontend Developer</span></span>
                </p>
                <p className="description">{`${props.currentLanguage === false ? 'Tras varios años en Marketing y Publicidad decidí comenzar como programadora.' : 'After several experiences in the Advertising Field, I´ve decided to go deeper and becoming a programmer.'}`}</p>
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
            </div>
    )
}
export default HomePage;