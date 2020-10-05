import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class IfCondition extends Component {
  state = {
    persons: [
      { name: "mani", age: 28 },
      { name: "mohith", age: 7 },
      { name: "kannan", age: 35 },
    ],
    otherState: "other state",
    showPersons: false,
  };

  switchNameHandler = (event) => {
    console.log("Switch Name Handler call");
    this.setState({
      persons: [
        { name: "mani", age: 28 },
        { name: event.target.value, age: 7 },
        { name: "kannan", age: 35 },
      ],
    });
  };

  nameChangeHandler = (newName) => {
    console.log("Switch Name Handler call");
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Nishitha", age: 7 },
        { name: "kannan", age: 35 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const showPer = this.state.showPersons;
    this.setState({
      showPersons: !showPer,
    });
  };

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
                  <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    changed={this.switchNameHandler}
                  />
      
                  <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    click={this.nameChangeHandler.bind(this, "raji")}
                  />
      
                  <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                  />
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

export default IfCondition;
