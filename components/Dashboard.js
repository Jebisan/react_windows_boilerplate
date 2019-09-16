import React, { Component } from 'react';
import {Platform, View, Text, Button } from 'react-native';
import Person from './Person.js';
import axios from 'axios';
import { connect } from 'react-redux';


class Dashboard extends Component {
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
        <Text>Hey from Dashboard!!</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
};

export default connect(mapStateToProps)(Dashboard);
