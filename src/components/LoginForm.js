/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {loginUser, emailChanged, passwordChanged} from '../actions';
import {
  Card,
  CardSection,
  Input,
  Button,
  TextButton,
  LinkButton,
  Spinner,
} from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPress = () => {
    //Actions.properties();
    const {email, password} = this.props;
    //console.log(this.props);
    this.props.loginUser({email, password});
  };
  //temporary, must use redux
  onSignUpPress() {
    Actions.signUp();
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
        onPress={this.onLoginPress.bind(this)}
        style={{marginLeft: 40, marginRight: 40}}>
        Login
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
            <Text style={styles.welcomeTextStyle}>Welcome Back,</Text>
            <Text style={styles.continueTextStyle}>Sign in to continue</Text>
            <View style={styles.placeholderStyle} />
          </View>
        </CardSection>

        <CardSection>
          <Input
            label="Email"
            placeholder="JohnDoe@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection style={{borderColor: '#fff'}}>
          <View style={styles.textContainer}>
            <TextButton>Forgot Password?</TextButton>
            {this.renderButton()}
          </View>
        </CardSection>

        <CardSection style={{borderColor: '#fff'}}>
          <View style={styles.container}>
            <View style={styles.placeholderStyle} />
            <Text> New User?</Text>
            <LinkButton onPress={this.onSignUpPress}>Sign Up</LinkButton>
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
    height: 60,
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
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
  };
};

export default connect(
  mapStateToProps,
  {emailChanged, passwordChanged, loginUser},
)(LoginForm);
