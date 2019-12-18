import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import {Card, CardSection, Button} from './common';

class ViewingForm extends Component {
  onAddPress() {
    Actions.addListing();
  }

  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <Card style={{flex: 1}}>
        <CardSection>
          <Button onPress={() => Actions.editListing()}>Edit</Button>
        </CardSection>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            position: 'absolute',
            bottom: 10,
            right: 10,
            height: 50,
            backgroundColor: '#007aff',
            borderRadius: 100,
          }}
          onPress={this.onAddPress}>
          <Icon name="ios-add" size={30} color="white" />
        </TouchableOpacity>
      </Card>
    );
  }
}

export default ViewingForm;
//NB USE TABNAVIGATOR
