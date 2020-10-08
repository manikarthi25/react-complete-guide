import { SAVE_COMMENT } from 'actions/types';
import commentsReducer from 'reducers/comments';

it('handle action of the save comment', () => {
    const action = {
            type: SAVE_COMMENT,
            payload: "New Comment"
    };
const newState = commentsReducer([], action);

expect(newState).toEqual(['New Comment']);
});

it('handle action with unknown type', () => {
    const newState = commentsReducer([], {type: 'manikandan'});
    expect(newState).toEqual([]);
});