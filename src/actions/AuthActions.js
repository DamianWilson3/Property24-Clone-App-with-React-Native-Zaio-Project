import {Actions} from 'react-native-router-flux';
import axios from 'axios';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  PASSWORD2_CHANGED,
  NAME_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from './types';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const nameChanged = text => {
  return {
    type: NAME_CHANGED,
    payload: text,
  };
};

export const password2Changed = text => {
  return {
    type: PASSWORD2_CHANGED,
    payload: text,
  };
};

export const loginUser = ({email, password}) => {
  return dispatch => {
    dispatch({type: LOGIN_USER});
    axios
      .post('http://1a234e98.ngrok.io/api/users/login', {
        email,
        password,
      })
      .then(res => {
        console.log(res.data);
        if (res.data.success && res.data.user.isAgent) {
          loginUserSuccess(dispatch, res.data.user);
          //Actions.properties();
        } else {
          loginUserFail(dispatch);
        }
      })
      .catch(error => {
        console.log(error);
        loginUserFail(dispatch);
      });
  };
};

export const registerUser = ({email, password, name, password2, isAgent}) => {
  return dispatch => {
    dispatch({type: REGISTER_USER});
    axios
      .post('http://1a234e98.ngrok.io/api/users/register', {
        email,
        password,
        name,
        password2,
        isAgent,
      })
      .then(res => {
        console.log(res.data);
        if (res.data.name) {
          registerUserSuccess(dispatch, res.data);
        } else {
          registerUserFail(dispatch);
        }
      })
      .catch(error => {
        console.log(error);
        registerUserFail(dispatch);
      });
  };
};

const loginUserFail = dispatch => {
  dispatch({type: LOGIN_USER_FAIL});
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });

  Actions.properties();
};

const registerUserFail = dispatch => {
  dispatch({type: REGISTER_USER_FAIL});
};

const registerUserSuccess = (dispatch, user) => {
  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: user,
  });

  Actions.properties();
};
