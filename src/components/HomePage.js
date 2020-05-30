import React from 'react';
import ProjectPage from './ProjectPage.js';
import Home from './../texts/home.js';

const HomePage =(props)=>{
    const { currentLanguage, filter, setFilter, setReset }=props;
    return(
        <div className="HomePage">
            <div className="containerHomePage">
            <div className="mainTitle">
                <h1>{ Home[currentLanguage].title }</h1>
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
                <span className="myweb">Patricia Ramos<br></br></span>
                <span className="myJob">Frontend Developer</span>
                </p>
                <p className="description description1">{ Home[currentLanguage].introduction }</p>
                <p className="description">{ Home[currentLanguage].description }</p>
                
                <p className="description">{ Home[currentLanguage].hobbies.title }</p>
                <div className="content">
                    <div className= { `${currentLanguage === 'es' ? 'content__container' : 'content__containerEn'}` }>
                        <ul className="content__container__list">
                            <li className="content__container__list__item">{ Home[currentLanguage].hobbies.firstHobbie }</li>
                            <li className="content__container__list__item">{ Home[currentLanguage].hobbies.secondHobbie }</li>
                            <li className="content__container__list__item">{ Home[currentLanguage].hobbies.thirdHobbie }</li>
                            <li className="content__container__list__item">{ Home[currentLanguage].hobbies.fourthHobbie }</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="stepToProjects">
                <div className="next">
                    <ProjectPage    currentLanguage={currentLanguage}
                                    filter={filter}
                                    setFilter={setFilter}
                                    setReset={setReset}
                    />
                </div>
            </div>
            
            </div> 
        </div>
    )
}
export default HomePage;