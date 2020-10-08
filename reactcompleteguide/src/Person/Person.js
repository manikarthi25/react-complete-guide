import React, { useEffect } from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const inlineStyle = {
        '@media(min-width: 500px)':{
            width: "400px",
            backgroundColor: 'yellow',
        }
    }
    
    useEffect(() => {
        console.log("use effect");
        setTimeout(() => {
            alert("Alert Person");
        }, 10)
    }, []);

    const randomNumber = Math.random();
    if ( randomNumber > 0.9) {
        throw new Error("Something went wrong");
    }
    return(
        <div className="Person" style={inlineStyle}>
            <p onClick = {props.click}>I am {props.name} and I am {props.age} old! </p>
            <p>{props.children}</p>
            <input  type="text"
                    onChange={props.changed}
                    value={props.name}/>
        </div>
    );
};
export default Radium(person);