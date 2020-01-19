import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Card, CardSection, Button, IconButton, Input} from './common';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {propertyCreate, propertyUpdate} from '../actions';
import {Actions} from 'react-native-router-flux';

class AddListing extends Component {
  state = {
    photo: null,
  };

  choosePhoto = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, response => {
      //console.log('response = ', response);
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };
  takePhoto = () => {
    const options = {};
    ImagePicker.launchCamera(options, response => {
      //console.log('response = ', response);
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };

  onCreatePress = () => {
    const {name, address, price} = this.props;
    const agent = this.props.user.email;
    this.props.propertyCreate({name, address, price, agent});
  };

  render() {
    const {photo} = this.state;
    return (
      <Card>
        <CardSection>
          <Text style={styles.headingStyle}>Property Images</Text>
        </CardSection>
        <CardSection>
          <View style={styles.imgContainerStyle}>
            {photo && (
              <Image
                source={{uri: photo.uri}}
                style={styles.imgStyle}
                resizeMode="stretch"
              />
            )}
            <View style={styles.buttonContainerStyle}>
              <IconButton icon="ios-camera" onPress={this.takePhoto}>
                TAKE A PHOTO
              </IconButton>
              <IconButton icon="ios-image" onPress={this.choosePhoto}>
                CHOOSE A PHOTO
              </IconButton>
            </View>
          </View>
        </CardSection>
        <CardSection>
          <Text style={styles.headingStyle}>Property Details</Text>
        </CardSection>
        <CardSection>
          <View style={styles.inputContainerStyle}>
            <Input
              label="Name"
              value={this.props.name}
              onChangeText={value => {
                this.props.propertyUpdate({prop: 'name', value});
              }}
            />
            <Input
              label="Address"
              value={this.props.address}
              onChangeText={value => {
                this.props.propertyUpdate({prop: 'address', value});
              }}
            />
            <Input
              label="Price"
              value={this.props.price}
              onChangeText={value => {
                this.props.propertyUpdate({prop: 'price', value});
              }}
            />
          </View>
        </CardSection>
        <CardSection>
          <View style={styles.bottomButtonContainerStyle}>
            <Button
              // eslint-disable-next-line react-native/no-inline-styles
              style={{width: 100}}
              onPress={() => Actions.pop()}>
              Cancel
            </Button>
            <Button
              // eslint-disable-next-line react-native/no-inline-styles
              style={{width: 100}}
              onPress={this.onCreatePress.bind(this)}>
              Create
            </Button>
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
  imgStyle: {
    margin: 10,
    width: '95%',
    height: 170,
  },
};

const mapStateToProps = state => {
  const {name, address, price} = state.propertyForm;
  const user = state.auth.user;

  return {name, address, price, user};
};
export default connect(
  mapStateToProps,
  {propertyUpdate, propertyCreate},
)(AddListing);
