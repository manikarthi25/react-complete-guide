import React, { Component } from "react";
import Radium, { StyleRoot } from 'radium'
import "./App.css";
import Person from "./Person/Person";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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
      width: "20%",
      backgroundColor: "red",
      padding: "10px",
      border: "2px solid black",
      margin: "10px",
      color: "white",
      cursor: 'pointer',
      ":hover": {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    };

    //let classes = ['red','bold'];

    let classes = [];

    if( this.state.persons.length <=2 ) {
      classes.push('red');
    }

    if( this.state.persons.length <=1 ) {
      classes.push('bold');
    }

    let persons = null;
    if (this.state.showPersons) {
        persons = (
            <div>
                {this.state.persons.map((person, index) => {
                return (
                  <ErrorBoundary key={person.id}>
                    <Person
                      name={person.name}
                      age={person.age}
                      click={() => this.deletePersonHandler(index)}
                      changed={(event) =>
                        this.nameChangedHandler(event, person.id)
                      }
                    />
                  </ErrorBoundary>
                );
            })}
            </div>
        );
        inlineStyle.backgroundColor = 'green';
        inlineStyle[":hover"] = {
          backgroundColor: 'lightblue',
          color: 'black',
        }
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Class Componet Example</h1>
          <p className={classes.join(" ")}>I hope, this is working !</p>
          <button style={inlineStyle} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(MapListExample);
