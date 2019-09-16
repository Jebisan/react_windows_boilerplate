import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [],
  possible: [		
    { "id": "01", "name": "Adam" },
    { "id": "02", "name": "Bob" },
    { "id": "03", "name": "Carl" },
    { "id": "04", "name": "Dan" },
    { "id": "05", "name": "Eric" },
    { "id": "06", "name": "Frank" }
  ],
};

const friendReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  friends: friendReducer,
});
