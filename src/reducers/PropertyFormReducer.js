import {
  PROPERTY_UPDATE,
  PROPERTY_CREATE,
  PROPERTY_SAVE_SUCCESS,
} from '../actions/types';
//img
const INITIAL_STATE = {
  name: '',
  address: '',
  price: '',
  //agent: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROPERTY_UPDATE:
      //action.payload === {prop: 'name' , value: 'mavis'}
      // w/o es6 syntax : const NewState = {};
      //newState[action.payload.prop] = action.payload.value
      return {...state, [action.payload.prop]: action.payload.value};

    case PROPERTY_CREATE:
      return INITIAL_STATE;

    case PROPERTY_SAVE_SUCCESS:
      return INITIAL_STATE;

    default:
      return state;
  }
};
