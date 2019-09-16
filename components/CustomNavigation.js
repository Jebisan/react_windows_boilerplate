import React, { PureComponent } from 'react';
import {Platform, StyleSheet, Text, View, Button } from 'react-native'; 
import Profile from './Profile'
import Dashboard from './Dashboard'
import Pictures from './Pictures'
import Settings from './Settings'


class CustomNavigation extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      viewDashboard: false,
      viewProfile: false,
      viewPictures: false,
      viewSettings: false,

    };
  }
  
  viewProfilesHandler = () => {
      this.setState({viewProfile:true})
      this.setState({viewDashboard:false})
      this.setState({viewPictures:false})
      this.setState({viewSettings:false})

  }

  viewDashboardHandler = () => {
    this.setState({viewProfile:false})
    this.setState({viewDashboard:true})
    this.setState({viewPictures:false})
    this.setState({viewSettings:false})
  }

  viewPicturesHandler = () => {
    this.setState({viewProfile:false})
    this.setState({viewDashboard:false})
    this.setState({viewPictures:true})
    this.setState({viewSettings:false})
}

viewSettingsHandler = () => {
  this.setState({viewProfile:false})
  this.setState({viewDashboard:false})
  this.setState({viewPictures:false})
  this.setState({viewSettings:true})
}


  render() {
    return (
      <View>
      <View style = {styles.navigation} >
      <Button title='Dashboard' onPress={this.viewDashboardHandler} />
      <Button title='Profiles' onPress={this.viewProfilesHandler} />
      <Button title='Pictures' onPress={this.viewPicturesHandler} />
      <Button title='Settings' onPress={this.viewSettingsHandler} />
      </View>
      <View style = {styles.welcome}>
         {this.state.viewDashboard?<Dashboard/>:null}
         {this.state.viewProfile?<Profile/>:null}
         {this.state.viewPictures?<Pictures/>:null}
         {this.state.viewSettings?<Settings/>:null}
         </View>
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
  navigation: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
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



export default CustomNavigation;
