import React, { useEffect } from 'react';

const Person = (props) => {

    const inlineStyle = {
        width:"60%",
        border: '4px solid red',
        margin: '15px',
        padding: "15px",
        textAlign: 'center'
    }

    useEffect(() => {
        console.log("use effect");
        setTimeout(() => {
           // alert("Alert Person");
        }, 10)
    }, []);

    return(
        <div style = {inlineStyle}>
            <p onClick = {props.click}>I am {props.name} and I am {props.age} old! </p>
            <input  type="text"
                    onChange={props.change}
                    value={props.name}/>
        </div>
    )
}

export default Person;