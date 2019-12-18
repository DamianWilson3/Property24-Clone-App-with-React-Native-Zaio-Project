import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IconButton = ({onPress, children, icon}) => {
  const {buttonStyle, textStyle} = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Icon name={icon} size={18} color="white" style={styles.iconStyle} />
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};
//can fix by doing Flex1 instead of height
const styles = {
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: '#007aff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    height: 45,
    width: 145,
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 10,

    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 12,
    fontWeight: '600',

    paddingLeft: 10,
    paddingRight: 10,
  },
  iconStyle: {
    paddingLeft: 10,
  },
};

export {IconButton};
