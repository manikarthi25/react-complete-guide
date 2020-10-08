import React from 'react';
import Person from './Person/Person';

const Persons = (props) => {
      return(
            <div>
                {
                    props.persons.map( (person, index) => {
                        return <Person 
                                    click = {() => props.clicked(index)}
                                    change = {(event) => props.changed(event, person.id)}
                                    key = {person.id}
                                    name = {person.name}
                                    age = {person.age}
                                   
                                    />
                    })
                }
            </div>
      );
}

export default Persons;