import {PROPERTY_FETCH_SUCCESS} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case PROPERTY_FETCH_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
