import React, { Component } from 'react';
import UserOutput from '../UserOutput/UserOutput';
import UserInput from '../UserInput/UserInput';

 class User extends Component {

    state = {
        username : "Manikandan"
    }

    changeNameHandler = (event) => {
        this.setState(
            {
                username: event.target.value
            }
        )
    }

    render() {
        return(
            <div>
                <UserInput changed={this.changeNameHandler} currentName={this.state.username}/>
                <UserOutput userName = {this.state.username}></UserOutput>
            </div>
        );
    }

 }

 export default User;