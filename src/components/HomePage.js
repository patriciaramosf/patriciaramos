import React from 'react';
import photo from '../images/patricartoon.jpeg'
import '../stylesheets/Homepage.scss'
const HomePage =()=>{
    return(
        <div className="HomePage">
            <div className="mainTitle">
                <h1>¡Hola, soy Patricia!</h1>
            </div>
            <div className="mainPhoto">
            <img className="thePhoto" src={photo}></img>
            </div>
            <div className="mainIcons">
                <i className="fab fa-github"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fas fa-envelope"></i>
                <i class="fab fa-twitter"></i>
            </div>
            <div className="mainText">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.</p>
            </div>
        </div>
    )
}
export default HomePage;