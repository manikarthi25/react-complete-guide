import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class MapListExample extends Component {
  state = {
    persons: [
      { id: "1", name: "mani", age: 28 },
      { id: "2", name: "mohith", age: 7 },
      { id: "3", name: "kannan", age: 35 },
    ],
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
        return person.id === id;
    })

     const person = {...this.state.persons[personIndex]};
     person.name = event.target.value;

     const persons = [...this.state.persons];
     persons[personIndex] = person;

     this.setState({persons: persons})

  };

  togglePersonsHandler = () => {
    const showPer = this.state.showPersons;
    this.setState({
      showPersons: !showPer,
    });
  };

  deletePersonHandler = (index) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    console.log(persons);
    persons.splice(index, 1);
    console.log(persons);
    this.setState({persons: persons});
  }

  render() {
    const inlineStyle = {
      width: "60%",
      backgroundColor: "red",
      padding: "10px",
      border: "2px solid black",
      margin: "10px",
    };

    let persons = null;
    if (this.state.showPersons) {
        persons = (
            <div>
                {this.state.persons.map((person, index) => {
                return(
                    <Person 
                        key = {person.id} 
                        name = {person.name} 
                        age = {person.age} 
                        click = {() => this.deletePersonHandler(index)}
                        changed = {(event) => this.nameChangedHandler(event, person.id)}/>
                )
            })}
            </div>
        );
    }

    return (
      <div className="App">
        <h1>Class Componet Example</h1>
        <button style={inlineStyle} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
       {persons}
      </div>
    );
  }
}

export default MapListExample;
