import React, { Component } from 'react';
import {Platform, View, Text, Button } from 'react-native';
import Person from './Person.js';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount(){
      this.setState(previousState => (
        { data: [		
          { "id": "01", "name": "Adam" },
          { "id": "02", "name": "Bob" },
          { "id": "03", "name": "Carl" },
          { "id": "04", "name": "Dan" },
          { "id": "05", "name": "Eric" },
          { "id": "06", "name": "Frank" }
        ] }
      ))
  }

  render() {
    return (
      <View>
        {
              this.state.data.map((obj) =>
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

export default Dashboard;
