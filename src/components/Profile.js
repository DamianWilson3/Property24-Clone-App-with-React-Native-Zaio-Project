/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, Image} from 'react-native';
import {Card, CardSection} from './common';
import {connect} from 'react-redux';
import {propertiesFetch} from '../actions';

class Profile extends Component {
  render() {
    return (
      <Card>
        <CardSection style={{alignContent: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../img/agent.jpg')}
            resizeMode="stretch"
            style={styles.imgStyle}
          />
        </CardSection>
        <CardSection
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <Text style={styles.nameStyle}>{this.props.user.name}</Text>
          <Text>{this.props.user.email}</Text>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  imgStyle: {
    height: 200,
    width: '90%',
  },
  nameStyle: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
};

const mapStateToProps = state => {
  //const properties = state.properties;

  const user = state.auth.user;
  return {user};
};

export default connect(
  mapStateToProps,
  {propertiesFetch},
)(Profile);
