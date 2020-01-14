/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback, Image} from 'react-native';
import {CardSection} from './common';
import {Actions} from 'react-native-router-flux';

class ListItem extends Component {
  onRowPress() {
    //were here, now do edit
    Actions.editListing({property: this.props.property});
  }
  render() {
    const {Address, Description, Price, ImagePath} = this.props.property;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection style={{justifyContent: 'center', flexDirection: 'row'}}>
            <Image
              source={ImagePath}
              style={styles.imgStyle}
              resizeMode="stretch"
            />
          </CardSection>
          <CardSection>
            <View style={styles.textContainerStyle}>
              <Text style={styles.addressStyle}>{Address}</Text>
              <Text style={styles.descriptionStyle}>{Description}</Text>
              <Text style={styles.priceStyle}>{Price}</Text>
            </View>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  imgStyle: {
    width: '95%',
    height: 150,
    marginLeft: 20,
    marginRight: 20,
  },
  textContainerStyle: {
    justifyContent: 'space-around',
  },
  addressStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 7,
  },
  descriptionStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 7,
  },
  priceStyle: {
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 7,
  },
};

export default ListItem;
