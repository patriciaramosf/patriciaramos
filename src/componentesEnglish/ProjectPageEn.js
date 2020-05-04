import React from 'react';
import icon from '../images/mistake.png'
import icon1 from '../images/pantera.png'
const  patri =()=>{
    return(
        <div className="ProjectPageEn">
            <div className="ProjectPage">
            <div className="projectCard one">
               <div className="projectCardTop oneTop">
                   <img className="iconProjectOne" alt="rick and morty" src={icon}/>
                   </div> 
                   <div className="projectCardBottom oneBottom">
                       <div className="project__info">
                        <h3 className="project__info--title">Rick and Morty App</h3>
                        <p className="project__info--tools">React - JavaScript - SASS</p>
                        <p className="project__info--description">Find your favourite character of the tv serie with this App.</p>
                       </div>
                       <div className="cardIcons">
                       <i className="fas fa-code"></i>
                       <i className="fas fa-tablet-alt"></i>
                       </div>
                   </div>
            </div>
            <div className="projectCard two">
               <div className="projectCardTop twoTop">
                   <img className="iconProjectTwo" alt="virtual cards" src={icon1}/>
                   </div> 
                   <div className="projectCardBottom twoBottom">
                       <div className="project__info">
                        <h3 className="project__info--title">Business Card Generator</h3>
                        <p className="project__info--tools">React - JavaScript - SASS</p>
                        <p className="project__info--description">Get your personal card and share it on Twitter</p>
                       </div>
                       <div className="cardIcons">
                       <i className="fas fa-code"></i>
                       <i className="fas fa-tablet-alt"></i>
                       </div>
                   </div>
            </div>
        </div>
        </div>
    )
}
export default patri;