import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/Navigator';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

export default class App extends React.Component {
  state = {
    isFontLoaded:false
  }

  async componentDidMount(){
    await Font.loadAsync({
      'Black' : require('./fonts/Poppins-Black.ttf'),
      'Bold' : require('./fonts/Poppins-Bold.ttf'),
      'Bold-Italic' : require('./fonts/Poppins-BoldItalic.ttf'),
      'Italic' : require('./fonts/Poppins-Italic.ttf'),
      'Medium' : require('./fonts/Poppins-Medium.ttf'),
      'Regular' : require('./fonts/Poppins-Regular.ttf'),
      'SemiBold' : require('./fonts/Poppins-SemiBold.ttf')
    });
    this.setState({isFontLoaded:true})
  }

  render(){
    return(
      //(this.state.isFontLoaded === true) ? (<AppNavigator/>):(AppLoading)
      <AppNavigator/>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
