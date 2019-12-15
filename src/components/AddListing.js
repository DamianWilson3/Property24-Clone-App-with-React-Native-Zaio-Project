import React, {Component} from 'react';
import {Text} from 'react-native';

class AddListing extends Component {
  render() {
    return <Text style={styles.headingStyle}>Property Images</Text>;
  }
}

const styles = {
  headingStyle: {
    fontSize: 18,
  },
};

export default AddListing;
