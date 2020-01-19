/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {
  Card,
  CardSection,
  Button,
  IconButton,
  Input,
  LinkButton,
  Confirm,
} from './common';
import ImagePicker from 'react-native-image-picker';
import {propertySave, propertyUpdate, propertyDelete} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';

class EditListing extends Component {
  state = {showModal: false, photo: null};

  choosePhoto = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, response => {
      //console.log('response = ', response.uri);
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };
  takePhoto = () => {
    const options = {};
    ImagePicker.launchCamera(options, response => {
      //console.log('response = ', response.uri);
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };
  onDeleteAccept() {
    const _id = this.props.property._id;
    this.props.propertyDelete({_id});
    this.setState({showModal: false});
  }
  onDeleteCancel() {
    this.setState({showModal: false});
  }

  onSubmitPress() {
    const {name, address, price} = this.props;
    const agent = this.props.user.email;
    const _id = this.props.property._id;
    console.log(this.props.property);
    this.props.propertySave({name, address, price, _id, agent});
  }

  componentDidMount() {
    _.each(this.props.property, (value, prop) => {
      this.props.propertyUpdate({prop, value});
    });
  }

  render() {
    const {photo} = this.state;
    return (
      <Card>
        <CardSection style={{alignContent: 'space-between'}}>
          <View style={styles.topContainerStyle}>
            <Text style={styles.headingStyle}>Property Images</Text>
            <LinkButton
              style={{paddingRight: 15}}
              TextStyle={{color: 'red'}}
              onPress={() => this.setState({showModal: true})}>
              DELETE
            </LinkButton>
          </View>
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
            {!photo && (
              <Image
                source={this.props.ImagePath}
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
            <Button style={{width: 100}} onPress={() => Actions.pop()}>
              Cancel
            </Button>
            <Button
              style={{width: 100}}
              onPress={this.onSubmitPress.bind(this)}>
              Submit
            </Button>
          </View>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onDeleteAccept.bind(this)}
          onDecline={this.onDeleteCancel.bind(this)}
          label="Warning">
          Do you want to delete this property?
        </Confirm>
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
  {propertyUpdate, propertySave, propertyDelete},
)(EditListing);
