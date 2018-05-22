import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class MainScreen extends React.Component{
    static navigationOptions = {
        title : 'MainScreen'
    
    }

    render(){
        return(
            <View style={{flex:1, justifyContent:'center',alignItems:'center',backgroundColor:'#293042'}}>
                <Text>It's been a while!</Text>
                <Button
                    title = "Go back to the Details Page"
                    onPress = {()=> this.props.navigation.navigate('Details')}
                />

            </View>
        );
    }
}

export default MainScreen;
