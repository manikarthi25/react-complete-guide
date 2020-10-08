import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';
import React from 'react';

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['comment1', 'comment2']
    };
   
    wrapped = mount(
        <Root initialState = { initialState }>
           <CommentList />);
        </Root>
    );
});

it('Create one LI per comment', () => {

   console.log(wrapped.find('li').length);
   expect(wrapped.find('li').length).toEqual(2);

});

it('show the text for each comment', () => {

    expect(wrapped.render().text()).toContain('comment1');
    expect(wrapped.render().text()).toContain('comment2');
 
 });