import React from 'react';

const Validation = (props) => {
    let validationMessage = "Text Long Enough ! "
    if ( props.textlenth <=5 ) {
        validationMessage = "Text Too Short !"
    } 
    return(
        <div>
            {validationMessage}
        </div>
    );
}

export default Validation;