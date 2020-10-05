import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import FunctionComponentExample from './FunctionComponentExample';

class ClassComponentExample extends Component {

  state = {
    persons : [ 
      { name: "mani", age: 28 },
      { name:"mohith", age: 7 },
      { name: "kannan", age: 35}
    ],
    otherState: "other state"
  }

  switchNameHandler = () => {
    console.log("Switch Name Handler call");
    this.setState(
      {
        persons : [ 
          { name: "manikandan", age: 37 },
          { name:"mohith", age: 7 },
          { name: "kiruth", age: 35}
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Class Componet Example</h1>
        <button onClick={this.switchNameHandler}>Switch Name using Class Component</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Person Children Value</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <FunctionComponentExample/>
      </div>
    );
    //React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, Welcome to React')));
  }

}

export default ClassComponentExample;
