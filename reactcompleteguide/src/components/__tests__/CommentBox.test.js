import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

let wrapped;

beforeEach(() => {
     wrapped = mount(
         <Provider store = { createStore(reducers, {}) }>
            <CommentBox />);
         </Provider>
     );
});

afterEach(() => {
    wrapped.unmount();
});

it('Show a text area and button', () => {

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);

});

describe('the text area', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target:{value: 'New Comment'}
        });
        wrapped.update();
    });

    it('has a text area and user type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('New Comment');
    });

    it('When sumbit form and text area gets emptied', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');

    });
});