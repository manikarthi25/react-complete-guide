import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App'
import { shallow } from 'enzyme'
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('shows comment box', () => {

    /* With Enzyem*/
    

    console.log(wrapped.find(CommentBox).length);

    expect(wrapped.find(CommentBox).length).toEqual(1);

    /* without using enzyme

    const div = document.createElement('div');

    ReactDOM.render(<App />, div);

    console.log(div.innerHTML);

    expect(div.innerHTML).toContain('CommentBox')

    ReactDOM.unmountComponentAtNode(div);
    */

});

it('Shows comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1); 
});