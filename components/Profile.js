import React, { Component } from 'react';
import {Platform, View, Text, Button } from 'react-native';
import Person from './Person.js';
import axios from 'axios';
import { connect } from 'react-redux';


class Profile extends Component {
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
        {
              this.props.friends.possible.map((obj) =>
                <Person
                  key={obj.id}
                  name={obj.name}
                  />
              )
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
};

export default connect(mapStateToProps)(Profile);
