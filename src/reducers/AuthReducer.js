import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  NAME_CHANGED,
  PASSWORD2_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
  registerError: '',
  registerLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      //make new state object copy to make redux update
      return {...state, email: action.payload};

    case PASSWORD_CHANGED:
      return {...state, password: action.payload};

    case PASSWORD2_CHANGED:
      return {...state, password2: action.payload};

    case NAME_CHANGED:
      return {...state, name: action.payload};

    case LOGIN_USER:
      return {...state, loading: true, error: ''};

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: '',
        loading: false,
        email: '',
        password: '',
      };

    case LOGIN_USER_FAIL:
      //can remove password rule
      return {
        ...state,
        error: 'Authentication Failed!',
        password: '',
        loading: false,
      };

    case REGISTER_USER:
      return {...state, registerLoading: true, registerError: ''};

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        registerError: '',
        registerLoading: false,
        email: '',
        password: '',
        name: '',
        password2: '',
      };

    case REGISTER_USER_FAIL:
      //can remove password rule
      return {
        ...state,
        registerError: 'REGISTER USER FAILED',
        registerLoading: false,
      };

    default:
      return state;
  }
};
