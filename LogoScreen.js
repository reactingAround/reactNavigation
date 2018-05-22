import React, { Component } from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
class LogoScreen extends React.Component {
    render() {
      return (
        <Image
          source={require('./1.jpg')}
          style={{ width: '100%', height: '100%',alignContent:'center',justifyContent:'center', }}
        />
      );
    }
  }
  
  class HomeScreen1 extends React.Component {
    static navigationOptions = {
      // headerTitle instead of title
      headerTitle: <LogoScreen />,
    };
  
    /* render function, etc */
  }
export default LogoScreen;