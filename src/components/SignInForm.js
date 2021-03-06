/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {
  registerUser,
  regEmailChanged,
  regPasswordChanged,
  nameChanged,
  password2Changed,
} from '../actions';

class SignInForm extends Component {
  onSignUpPress = () => {
    const {regEmail, regPassword, password2, name} = this.props;

    this.props.registerUser({
      regEmail,
      regPassword,
      name,
      password2,
      isAgent: true,
    });
  };
  onEmailChange(text) {
    this.props.regEmailChanged(text);
  }

  onNameChange(text) {
    this.props.nameChanged(text);
  }

  onPasswordChange(text) {
    this.props.regPasswordChanged(text);
  }

  onPassword2Change(text) {
    this.props.password2Changed(text);
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
        onPress={this.onSignUpPress.bind(this)}
        style={{marginLeft: 40, marginRight: 40}}>
        Sign Up
      </Button>
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection style={{borderColor: '#fff'}}>
          <Image
            source={require('../logo.png')}
            style={styles.imgStyle}
            resizeMode="contain"
          />
        </CardSection>
        <CardSection>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeTextStyle}>Welcome New User,</Text>
            <Text style={styles.continueTextStyle}>Sign up to get started</Text>
            <View style={styles.placeholderStyle} />
          </View>
        </CardSection>
        <CardSection>
          <Input
            label="Full Name"
            placeholder="John Doe"
            onChangeText={this.onNameChange.bind(this)}
            value={this.props.name}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Email"
            placeholder="JohnDoe@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.regEmail}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.regPassword}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Confirm Password"
            placeholder="password"
            secureTextEntry
            onChangeText={this.onPassword2Change.bind(this)}
            value={this.props.password2}
          />
        </CardSection>
        <CardSection>
          <View style={styles.textContainer}>
            <View style={styles.placeholderStyle} />
            {this.renderButton()}
          </View>
        </CardSection>
        {this.renderError()}
      </Card>
    );
  }
}

const styles = {
  imgStyle: {
    flex: 1,
    margin: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeTextStyle: {
    fontSize: 30,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  continueTextStyle: {
    color: '#c0c0c0',
  },
  placeholderStyle: {
    height: 30,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    padding: 10,
  },
};

const mapStateToProps = state => {
  return {
    regEmail: state.auth.regEmail,
    regPassword: state.auth.regPassword,
    password2: state.auth.password2,
    name: state.auth.name,
    error: state.auth.registerError,
    loading: state.auth.registerLoading,
  };
};

export default connect(
  mapStateToProps,
  {
    regEmailChanged,
    regPasswordChanged,
    registerUser,
    nameChanged,
    password2Changed,
  },
)(SignInForm);
