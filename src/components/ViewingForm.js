import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

class ViewingForm extends Component {
  onAddPress() {
    Actions.Listing();
  }

  render() {
    return (
      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 70,
          position: 'absolute',
          bottom: 10,
          right: 10,
          height: 70,
          backgroundColor: '#fff',
          borderRadius: 100,
        }}
        onPress={this.onAddPress}>
        <Icon name="ios-add" size={30} color="#01a699" />
      </TouchableOpacity>
    );
  }
}

export default ViewingForm;
//NB USE TABNAVIGATOR
