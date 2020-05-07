import React from 'react';
import photo from '../images/patricartoon.jpeg'
import ProjectPage from './ProjectPage.js'
import ProjectPageEn from '../componentesEnglish/ProjectPageEn.js'
const HomePage =(props)=>{
    return(
        <div className="HomePage">
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
                <p className="description">{`${props.currentLanguage === false ? 'Tras varias experiencias en el sector del Marketing Digital, decidí formarme como desarrolladora Frontend en Adalab Digital.' : 'After several experiences in the Digital Marketing Field, I decided to learn to code at Adalab Digital.'}`}</p>
                <p className="description">{`${props.currentLanguage === false ? 'Soy de Madrid, me considero una persona alegre y colaborativa, y estoy buscando trabajo, ya sea aquí o en Lisboa.' : 'I´m from Madrid, I consider myself a happy and collaborative person and I´m looking for a job either here or in Lisbon.'}`}
                </p>
                <p className="description">{`${props.currentLanguage === false ? 'Me gusta comer(' : 'I love eating ('}`}<small className="dedicatory"><i class="fas fa-heart"></i><span className="pasteis">{`${props.currentLanguage === false ? 'tortilla de patatas' : 'pastèis de bacalhau'}`}</span>)</small>{`${props.currentLanguage === false ? ',leer y reírme.' : ',reading and laughing.'}`}</p>
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