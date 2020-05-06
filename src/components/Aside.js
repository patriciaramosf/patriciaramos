import React from 'react';
import {Link} from 'react-router-dom';
const Aside =(props)=>{
    return(
        <div className="aside">
                <Link to={`${props.currentLanguage === false ? '/proyectos' : 'projects'}`}><p className="linkTabletProject">{`${props.currentLanguage === false ? ' PROYECTOS -' : ' PROJECTS -'}`}</p></Link>
            </div>
    )}
export default Aside;


