import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <hi>Hi, Welcome to React</hi>
      </div>
    );
    //React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, Welcome to React')));
  }

}

export default App;
