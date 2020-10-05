import React from 'react';
import './UserOutput.css'

const Output = (props) => {
    return(
        <div className="UserOutput">
            <p> User Name : {props.userName}</p>
        </div>
    );
}

export default Output;