import React from 'react';
import {Link} from 'react-router-dom';

const AsideProject =(props)=>{
    return(
        <div className="aside">
                <Link to={`${props.currentLanguage === false ? '/' : '/'}`}>
                    <p className="linkTabletProject">{`${props.currentLanguage === false ? ' HOLA -' : ' HELLO -'}`}
                    </p>
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
export default AsideProject;


