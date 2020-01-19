import React, {Component} from 'react';
import {TouchableOpacity, FlatList} from 'react-native';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import {Card} from './common';
import ListItem from './ListItem';
import {propertiesFetch} from '../actions';
import {connect} from 'react-redux';

// const Properties = [
//   {
//     address: '1 Salvatore Square, Edgemead, 7441',
//     name: '3 Bedroom Villa',
//     price: 'R2,400,000',
//     ImagePath: require('../img/Properties/1.jpeg'),
//   },
//   {
//     address: '12 Fast Lane, Sandton, 7491',
//     name: '10 Bedroom Mansion',
//     price: 'R420,000',
//     ImagePath: require('../img/Properties/2.jpg'),
//   },
//   {
//     address: '7 Denberry Road, Lancaster, 6969',
//     name: '5 Bedroom Villa',
//     price: 'R7,400,000',
//     ImagePath: require('../img/Properties/3.jpg'),
//   },
// ];

class ViewingForm extends Component {
  onAddPress() {
    Actions.addListing();
  }

  keyExtractor = item => item.address;

  renderRow({item}) {
    return <ListItem property={item} />;
  }

  componentDidMount = () => {
    this.props.propertiesFetch({agent: this.props.user.email});
    //console.log(this.props);
  };

  render() {
    return (
      //NB BCOS PROPERTIES IS THE VALUE IN INDEX REDUCERS OF PROPERTYREDUCER SO:
      //chnge to data = this.props.properties
      // eslint-disable-next-line react-native/no-inline-styles
      <Card style={{flex: 1}}>
        <FlatList
          data={this.props.properties}
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

const mapStateToProps = state => {
  //const properties = state.properties;
  const properties = _.map(state.properties, (val, num) => {
    return {...val, num}; // puts objs in array
  });
  const user = state.auth.user;
  return {properties, user};
};

export default connect(
  mapStateToProps,
  {propertiesFetch},
)(ViewingForm);
