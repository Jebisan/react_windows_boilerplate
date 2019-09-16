/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Button } from 'react-native'; 
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import friendReducer from './reducer.js';
import CustomNavigation from './components/CustomNavigation'

const store = createStore(friendReducer);

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={ store } >
      <View style={styles.container}>
         <CustomNavigation/>
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
