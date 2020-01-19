import {
  PROPERTY_CREATE,
  PROPERTY_FETCH_SUCCESS,
  PROPERTY_SAVE_SUCCESS,
  PROPERTY_UPDATE,
} from './types';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

export const propertyUpdate = ({prop, value}) => {
  return {
    type: PROPERTY_UPDATE,
    payload: {prop, value},
  };
};
//img
export const propertyCreate = ({name, address, price, agent}) => {
  console.log({name, address, price, agent});
  return dispatch => {
    axios
      .post('https://property24-clone-app.herokuapp.com/api/properties/add', {
        name,
        address,
        price,
        agent,
        //img,
      })
      .then(() => {
        dispatch({type: PROPERTY_CREATE});
        Actions.properties();
      })
      .catch(err => console.log(err));
  };
};

export const propertiesFetch = ({agent}) => {
  return dispatch => {
    axios
      .post(
        'https://property24-clone-app.herokuapp.com/api/properties/getAgents',
        {
          agent,
        },
      )
      .then(res => {
        dispatch({type: PROPERTY_FETCH_SUCCESS, payload: res.data});
      });
  };
};
//img add img to the definition and update NB have to update with all fields
//maybe send in the whole object for update
export const propertySave = ({name, address, price, _id, agent}) => {
  console.log(_id);
  return dispatch => {
    axios
      .post(
        `https://property24-clone-app.herokuapp.com/api/properties/update/${_id}`,
        {
          name,
          address,
          price,
          agent,
        },
      )
      .then(res => {
        dispatch({type: PROPERTY_SAVE_SUCCESS});
        Actions.properties();
        console.log(res);
      });
  };
};

export const propertyDelete = ({_id}) => {
  return () => {
    axios
      .delete(
        `https://property24-clone-app.herokuapp.com/api/properties/delete/${_id}`,
      )
      .then(res => {
        console.log(res);
        Actions.properties();
      });
  };
};
