import React, {Component} from 'react';
import {TouchableOpacity, FlatList} from 'react-native';
//import _ from 'lodash';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import {Card} from './common';
import ListItem from './ListItem';

const Properties = [
  {
    Address: '1 Salvatore Square, Edgemead, 7441',
    Description: '3 Bedroom Villa',
    Price: 'R2,400,000',
    ImagePath: require('../img/Properties/1.jpeg'),
  },
  {
    Address: '12 Fast Lane, Sandton, 7491',
    Description: '10 Bedroom Mansion',
    Price: 'R420,000',
    ImagePath: require('../img/Properties/2.jpg'),
  },
  {
    Address: '7 Denberry Road, Lancaster, 6969',
    Description: '5 Bedroom Villa',
    Price: 'R7,400,000',
    ImagePath: require('../img/Properties/3.jpg'),
  },
];

class ViewingForm extends Component {
  onAddPress() {
    Actions.addListing();
  }

  keyExtractor = item => item.Address;

  renderRow({item}) {
    return <ListItem property={item} />;
  }

  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <Card style={{flex: 1}}>
        <FlatList
          data={Properties}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderRow}
        />
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
