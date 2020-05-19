import React from 'react';

const FilteredButtons = (props)=>{
    const { button } = props;
    const { id, text } = button;
    const handleProjects = () => {
        props.setFilter(button.id)
    }
    return(
        <>
            <button     className={ button.class }
                        onClick={ handleProjects }
                        id={ id }> 
                        { text[props.currentLanguage] }
            </button>
        </>
    )
}
export default FilteredButtons;