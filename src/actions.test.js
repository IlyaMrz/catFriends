import * as actions from './actions';
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';

const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
  })


it("should create a Pending action on request Robots", () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots())
    const action = store.getActions();
    expect(action[0]).toEqual({type: "REQUEST_ROBOTS_PENDING"});
});