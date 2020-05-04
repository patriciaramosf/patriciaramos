import React from 'react';
import photo from '../images/patricartoon.jpeg'
import ProjectPage from '../components/ProjectPage.js'
import { Link } from 'react-router-dom';

const HomePageEnglish =()=>{
    return(
        <div className="HomePage">
            {/* <Link to ='/'> */}
            <div className="languageToggle">
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"/>
                </label>
            </div>
            {/* </Link> */}
            <div className="mainTitle">
                <h1>- HI!</h1>
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
                    <h2 className="projects__title">PROJECTS -</h2>
                </div>
            </div>
            <ProjectPage></ProjectPage>
            
        </div>
    )
}
export default HomePageEnglish;