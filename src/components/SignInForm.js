import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';
import {Card, CardSection, Input, Button} from './common';

class SignInForm extends Component {
  onSignUpPress() {
    return;
  }
  render() {
    return (
      <Card>
        <CardSection>
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
          <Input label="Full Name" placeholder="John Doe" />
        </CardSection>
        <CardSection>
          <Input label="Email" placeholder="JohnDoe@gmail.com" />
        </CardSection>

        <CardSection>
          <Input label="Password" placeholder="password" secureTextEntry />
        </CardSection>
        <CardSection>
          <Input
            label="Confirm Password"
            placeholder="password"
            secureTextEntry
          />
        </CardSection>
        <CardSection>
          <View style={styles.textContainer}>
            <View style={styles.placeholderStyle} />
            <Button onPress={this.onSignUpPress}>Sign Up</Button>
          </View>
        </CardSection>
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
};

export default SignInForm;
