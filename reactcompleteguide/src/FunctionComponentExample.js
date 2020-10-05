import React, { useState} from 'react';
import './App.css';
import Person from './Person/Person';

const FunctionComponentExample = props => {

    const [personsState, setPersonsState] = useState(
        {
            persons : [ 
                { name: "mani", age: 28 },
                { name: "mohith", age: 7 },
                { name: "kannan", age: 35}
              ]
        }
    );

    //const [otherState, setOtherState] = useState("other state");

    const switchNameHandler = () => {
        setPersonsState(
            {
                persons : [ 
                    { name: "manikandan", age: 37 },
                    { name:"mohith", age: 7 },
                    { name: "kiruth", age: 35}
                  ]
            }
        )
    }

    return(
        <div>
            <h1>Functional Componet Example</h1>
            <button onClick={switchNameHandler}>Switch Name using Functional Component</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
    );

}

export default FunctionComponentExample;