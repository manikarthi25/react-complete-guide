import React from 'react';

const Char = (props) => {
    const inlineStyle = {
        display: 'inline-block',
        padding: '16px',
        border: '2px solid red',
        textAlign: 'center',
        margin: '10px'
    };

    return(
        <div style = {inlineStyle} onClick={props.changed}>
            {props.character}
        </div>
    );

};

export default Char;