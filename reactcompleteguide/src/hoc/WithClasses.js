import React from 'react';

const WithClasses = (WrappedComponent, className) => {
    return props => (
        <div className = { className }>
            <WrappedComponent />
        </div>
    );
};

export default WithClasses;