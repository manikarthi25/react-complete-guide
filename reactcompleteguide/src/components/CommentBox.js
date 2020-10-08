import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';


class CommentBox extends Component {

    state = {
        comment:''
    }

    changeHandle = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    onSubmitHandle = (event) => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState({
            comment:''
        })
    }
    render() {

        const inlineStyle = {
            width:'400px',
            padding: "15px",
            margin: "15px",
            border: "2px solid red",
            textAlign: "center"
        }

        return(
            <div style = {inlineStyle}>
            <form onSubmit = { this.onSubmitHandle }>
                <h1>Add a comment</h1>
                <textarea onChange = { this.changeHandle } value = { this.state.comment } />
                <div>
                    <button>Submit Comment</button>
                </div>
                <h1>Comment Box</h1>
            </form>
            </div>
        );
    };

}

export default connect(null, actions)(CommentBox);