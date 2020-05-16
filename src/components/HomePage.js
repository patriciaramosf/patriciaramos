import React from 'react';
import photo from '../images/cartoon.png'
import ProjectPage from './ProjectPage.js'
const HomePage =(props)=>{
    return(
        <div className="HomePage">
            <div className="containerHomePage">
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
                <p className="description">{`${props.currentLanguage === false ? 'Tras varias experiencias en el sector del Marketing Digital, decidí formarme en Adalab como desarrolladora.' : 'After several experiences in Digital Marketing, I decided to learn coding at Adalab.'}`}</p>
                <p className="description">{`${props.currentLanguage === false ? 'Soy de Madrid, me considero una persona alegre, curiosa y colaborativa, y estoy buscando un trabajo en el que poder aportar y aprender cada día.' : 'I´m from Madrid, I consider myself a happy, curious and collaborative person, and I´m looking for a job where I can put all my skills and learn everyday.'}`}
                </p>
                
                <p className="description">{`${props.currentLanguage === false ? 'Me encanta ' : 'I love '}`} </p>
                <div className="content">
                    <div className= {`${props.currentLanguage === false ? 'content__container' : 'content__containerEn'}`}>
                    <ul className="content__container__list">
                        <li className="content__container__list__item">{`${props.currentLanguage === false ? '<reir>' : '<laughing>'}`}</li>
                        <li className="content__container__list__item">{`${props.currentLanguage === false ? '<comer>' : '<eating>'}`}</li>
                        <li className="content__container__list__item">{`${props.currentLanguage === false ? '<stackoverflow>' : '<stackoverflow>'}`}</li>
                        <li className="content__container__list__item">{`${props.currentLanguage === false ? '<The office>' : '<The office US>'}`}</li>
                    </ul>
                    </div>
                    </div>
            </div>
            <div className="stepToProjects">
                <div className="next">
                    <ProjectPage    currentLanguage={props.currentLanguage}
                                    filter={props.filter}
                                    setFilter={props.setFilter}
                                    setReset={props.setReset}
                    />
                </div>
            </div>
            
            </div> 
        </div>
    )
}
export default HomePage;