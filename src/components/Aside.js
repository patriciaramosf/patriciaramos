import React from 'react';
import {Link} from 'react-router-dom';

const Aside =(props)=>{
    const { currentLanguage, switchLanguage, text, link, textEn } = props;
    const handleLanguages=()=>{
        props.changeLanguage()
    }
    return(
        <div className="aside">
            <div className="languageToggle">
                <label className="switch">
                    <input  type="checkbox"
                            checked={ switchLanguage }
                            onChange={ handleLanguages }
                    />
                    <span className="slider round"/>
                </label>
            </div>
                <Link to={link}>
                    <button className="asidebtn">
                    {`${currentLanguage === 'es' ? text : textEn}`}
                    </button>
                </Link>
                <div className="mainIconsAside">
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
            </div>
    )}
export default Aside;


