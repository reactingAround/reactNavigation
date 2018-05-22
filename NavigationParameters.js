import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class NavigationParameters extends React.Component{
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        
        return {
          title: params ? params.otherParam : 'A Nested Details Screen',
        }
      };
    }

export default NavigationParameters;