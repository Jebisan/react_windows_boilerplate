/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native'; 
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import friendReducer from './reducer.js';

const instructions =
  'Press Ctrl+R to reload,\n' +
  'Shift+F10 or shake for dev menu';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.welcome}>Hello from App.windows.js!</Text>
        <Dashboard/>
      </View>
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
