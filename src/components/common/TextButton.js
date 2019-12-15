import React from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';

const TextButton = ({onPress, children, color}) => {
  const {buttonStyle, textStyle} = styles;

  return (
    <TouchableWithoutFeedback onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
  },
  textStyle: {
    alignSelf: 'center',
    color: '#c0c0c0',
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export {TextButton};
