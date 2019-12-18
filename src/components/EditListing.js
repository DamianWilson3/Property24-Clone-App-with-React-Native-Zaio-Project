/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {
  Card,
  CardSection,
  Button,
  IconButton,
  Input,
  LinkButton,
} from './common';

class EditListing extends Component {
  render() {
    return (
      <Card>
        <CardSection style={{alignContent: 'space-between'}}>
          <View style={styles.topContainerStyle}>
            <Text style={styles.headingStyle}>Property Images</Text>
            <LinkButton style={{paddingRight: 15}} TextStyle={{color: 'red'}}>
              DELETE
            </LinkButton>
          </View>
        </CardSection>
        <CardSection>
          <View style={styles.imgContainerStyle}>
            <View style={styles.buttonContainerStyle}>
              <IconButton icon="ios-camera">TAKE A PHOTO</IconButton>
              <IconButton icon="ios-image">CHOOSE A PHOTO</IconButton>
            </View>
          </View>
        </CardSection>
        <CardSection>
          <Text style={styles.headingStyle}>Property Details</Text>
        </CardSection>
        <CardSection>
          <View style={styles.inputContainerStyle}>
            <Input label="Name" />
            <Input label="Address" />
            <Input label="Price" />
          </View>
        </CardSection>
        <CardSection>
          <View style={styles.bottomButtonContainerStyle}>
            <Button style={{width: 100}}>Cancel</Button>
            <Button style={{width: 100}}>Submit</Button>
          </View>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  headingStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imgContainerStyle: {
    flex: 1,
    height: 250,
    borderWidth: 1,
    borderColor: '#007aff',

    flexGrow: 1,
    justifyContent: 'space-between',
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-around',
  },
  inputContainerStyle: {
    flex: 1,
    height: 200,
    borderWidth: 1,
    borderColor: '#007aff',
    paddingRight: 10,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  bottomButtonContainerStyle: {
    flex: 1,
    flexDirection: 'row',

    justifyContent: 'space-around',
  },
  topContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 20,
    justifyContent: 'space-between',
  },
};
export default EditListing;
