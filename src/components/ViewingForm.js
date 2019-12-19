import React, {Component} from 'react';
import {TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import {Card} from './common';
import ListItem from './ListItem';

const Properties = {
  prop1: {
    Address: '1 Salvatore Square, Edgemead, 7441',
    Description: '3 Bedroom Villa',
    Price: '$2,400,000',
    Image: '../img/Properties/1.jpeg',
  },
  prop2: {
    Address: '69 Dick Way, Sandton, 7491',
    Description: '69 Bedroom Shagpad',
    Price: '$420,000',
    Image: '../img/Properties/2.jpg',
  },
  prop3: {
    Address: '7 Denberry Road, Lancaster, 6969',
    Description: '5 Bedroom Villa',
    Price: '$7,400,000',
    Image: '../img/Properties/3.jpg',
  },
};

class ViewingForm extends Component {
  onAddPress() {
    Actions.addListing();
  }

  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <Card style={{flex: 1}}>
        <ListItem />
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
