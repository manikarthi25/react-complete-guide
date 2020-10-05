import React from 'react';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class Assignment2 extends React.Component {
    state = {
        inputField: ''
    }

    changeInputFieldHandler = (event) => {
        this.setState({
            inputField:event.target.value
        })
    }

    deleteCharHandler = (index) => {
        const chars = this.state.inputField.split('');
        chars.splice(index, 1);
        console.log(chars);
        const updatedText = chars.join('');
        console.log(updatedText);
        this.setState({
            inputField: updatedText
        })
    }

    render() {
        const chatList = this.state.inputField.split('').map((ch, index) => {
            return(<Char 
                character={ch}
                key={index}
                changed={() => this.deleteCharHandler(index)}/>);
        });
        return(
            <div>
                <input 
                    type='text'
                    onChange={this.changeInputFieldHandler}
                    value = {this.state.inputField}/>
                <p>{this.state.inputField}</p>
                <Validation textlenth = {this.state.inputField.length}/>
                {chatList}
            </div>
        );
    }
}

export default Assignment2;