import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Person from './Person.js';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['1','2', '3' ]
    };
  }

  

  componentDidMount(){
      this.setState(previousState => (
        { data: ['4','5'] }
      ))

  }


    getState () {
      console.log(this.state.data)
    }



  render() {
    return (
      <View>
        <Text> Welcome to the Dashboard page! </Text>
        <Button title = 'TRYK HER!' onPress={this.getState} />
        {
              this.state.data.map((obj) =>
                <Person
                  id={obj.id}
                  name={obj.title}
                  />
              )
            }
      </View>
    );
  }
}

export default Dashboard;
