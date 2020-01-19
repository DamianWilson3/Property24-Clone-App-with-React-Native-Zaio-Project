import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import PropertyFormReducer from './PropertyFormReducer';
import PropertyReducer from './PropertyReducer';

export default combineReducers({
  auth: AuthReducer,
  propertyForm: PropertyFormReducer,
  properties: PropertyReducer,
});
