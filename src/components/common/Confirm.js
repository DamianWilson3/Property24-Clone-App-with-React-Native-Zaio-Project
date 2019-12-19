/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Modal} from 'react-native';
import {CardSection} from './CardSection';
import {Button} from './Button';

const Confirm = ({children, visible, onAccept, onDecline, label}) => {
  const {containerStyle, textStyle, cardSectionStyle} = styles;
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}>
      <View style={containerStyle}>
        <CardSection style={{justifyContent: 'center'}}>
          <Text style={styles.headingStyle}>{label}</Text>
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <View style={styles.buttonContainerStyle}>
            <Button style={{width: 100}} onPress={onAccept}>
              Yes
            </Button>
            <Button style={{width: 100}} onPress={onDecline}>
              No
            </Button>
          </View>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
};

export {Confirm};
