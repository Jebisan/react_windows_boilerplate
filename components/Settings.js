import React, { Component } from 'react';
import {Platform, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';


class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewProfile: false
    };
  }
  componentDidMount(){
  }

  render() {
    return (
      <View>
    <Text>Hello from Settings!</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
};

export default connect(mapStateToProps)(Settings);
