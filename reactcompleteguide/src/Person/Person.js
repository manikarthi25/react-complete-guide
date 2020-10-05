import React from 'react';

const person = (props) => {
    return(
        <div>
            <p>I am {props.name} and I am {props.age} old! </p>
            <h1><p>{props.children}</p></h1>
        </div>
    );
};
export default person;