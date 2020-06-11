import React from 'react';
import { Link } from 'react-router-dom';
import Home from './../texts/home.js';

const ProjectDetails = (props) =>{
    const { project } = props;
    const { text, links, images } = project;
    return(
    <div className="ProjectDetails">
        <div className="details__top">
            <Link to='/'><i className="btnMobile">{Home[props.currentLanguage].button}</i></Link>
            <Link to='/projects'><i className="btnTablet">{Home[props.currentLanguage].button}</i></Link>
            <h2 className="projectDetails__Title">{ text[props.currentLanguage].name }</h2>
        </div>
        <div className="container__Details">
            <p className="details__description">{ text[props.currentLanguage].description }</p>
            <div className="buttons__details">
            <button className="details__button web btn"><a href={ links.code } target="blank">Visit web</a></button>
            {
                !!links.web &&
            <button className="details__button code btn"><a href={ links.web } target="blank">See the code</a></button>
                }
            </div>
            <div className="img__container">
                <img className ={images.detail.class} alt={images.detail.alt} src={images.detail.src}></img>
            </div>
        </div>
    </div>
)}


export default ProjectDetails;