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
  //ImagePath: '',
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case PROPERTY_UPDATE:
      //action.payload === {prop: 'name' , value: 'mavis'}
      // w/o es6 syntax : const NewState = {};
      //newState[action.payload.prop] = action.payload.value
      return {...state, [action.payload.prop]: action.payload.value};

    case PROPERTY_CREATE:
      return {...state, name: '', address: '', price: ''};

    case PROPERTY_SAVE_SUCCESS:
      return {...state, name: '', address: '', price: ''};

    default:
      return state;
  }
};
