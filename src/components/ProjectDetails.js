import React from 'react';
import cat from './../images/sticker.png'

const ProjectDetails = () =>{
    return(
    <div className="ProjectDetails">
        <div className="details__top">
            <button className="btn btnDetails" href='./projects'>VOLVER</button>
            <h2 className="projectDetails__Title">TÍTULO</h2>
        </div>
        <div className="container__Details">
        <p className="details__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
            <div className="buttons__details">
            <button className="details__button web btn" href="#">Visit website</button>
            <button className="details__button web btn" href="#">See the code</button>
            </div>
            <div className="img__container">
                <img className ="img__details" alt="projects" src={cat}></img>
            </div>
        </div>
    </div>
)}

export default ProjectDetails;