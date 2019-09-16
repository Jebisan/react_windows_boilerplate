import React, { Component } from 'react';
import {Platform, View, Text, Button, Image } from 'react-native';
import Person from './Person.js';
import axios from 'axios';
import { connect } from 'react-redux';


class Pictures extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
                 <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
};

export default connect(mapStateToProps)(Pictures);
