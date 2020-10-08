import React from  'react';
import Persons from '../components/Persons/Persons';
import './App.css';

class App extends React.Component {

    state = {
        persons : [
            { id: "1", name: "mani", age: "37" },
            { id: "2", name: "kannan", age: "36" },
            { id: "3", name: "kutti", age: "34" }
        ],
        showPersons: false
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        })
    }

    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({
            persons:persons
        })
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex( person => {
           return  person.id === id;
        });

        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        })
    }

    render() {

        const inlineStyle = {
            width:"50%",
            border: '1px solid red',
            margin: '15px',
            padding: "15px",
            textAlign: 'center'
        }

        const btnStyle = {
            backgroundColor: 'red',
            width: '150px',
            padding: '15px',
            textAlign: 'center',
            border: '2px solid black',
            color: 'white',
            fontWeight: 'bold'
        }

        let persons = null;
        if ( this.state.showPersons ) {
            persons = (
                <Persons 
                    persons = {this.state.persons}
                    clicked = {this.deletePersonHandler}
                    changed = {this.nameChangeHandler}
                />
            );
            btnStyle.backgroundColor = "green";
        }

        let classes = ['red','green'];

        return(
            <div className = "App" style= {inlineStyle}>
                <p className = {classes.join(' ')}>{this.props.title}</p>
                <button 
                    onClick = {this.togglePersonsHandler}
                    style = {btnStyle}>Toggle Persons</button>
                {persons}
            </div>
        );

    };
}

export default App;