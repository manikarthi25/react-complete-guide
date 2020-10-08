import React from 'react';

class ErrorBoundary extends React.Component {

    state = {
        hasError: false,
        errorMessage:''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError:true,
            errorMessage: error
        })
    }
 
    render() {
        if(this.hasError) {
            return <jh1>{this.state.errorMessage}</jh1> 
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;