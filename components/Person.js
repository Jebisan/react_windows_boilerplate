import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
         <Text> hej </Text>
        <Text> {this.props.name} </Text>
      </View>
    );
  }
}

export default Person;
