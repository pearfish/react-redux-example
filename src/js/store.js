import { createStore } from 'redux';

const initialState = {
    name: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'reset':
        return initialState;
    case 'setName':
        return {...state, name: action.name };
    default:
      return state;
  }
}

export const store = createStore(reducer);