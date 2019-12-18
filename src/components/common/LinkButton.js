import React from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';

const LinkButton = ({onPress, children, style, TextStyle}) => {
  const {buttonStyle, textStyle} = styles;

  return (
    <TouchableWithoutFeedback onPress={onPress} style={[buttonStyle, style]}>
      <Text style={[textStyle, TextStyle]}>{children}</Text>
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
    color: '#007aff',
    fontSize: 14,
    fontWeight: '600',
  },
};

export {LinkButton};
