//import libraries for component
import React from 'react';
import {View, Image} from 'react-native';

//make a component
const Header = props => {
  const {viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Image source={require('../../logo.png')} resizeMode="contain" />
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
  imgStyle: {
    flex: 1,
  },
};

//make component available to other parts of app
export {Header};
