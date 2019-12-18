import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children, style}) => {
  const {buttonStyle, textStyle} = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};
//can fix by doing Flex1 instead of height
const styles = {
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#007aff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    height: 45,
    marginLeft: 10,
    marginRight: 10,
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export {Button};
