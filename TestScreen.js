import React, { Component } from 'react';
import { Text,StyleSheet,View,Button } from 'react-native';


class TestScreen extends Component{
    static navigationOptions = {
        title : 'TestScreen'
    }

    render(){
        return(
            <View style = {styles.container}>
                <Text> TestScreen</Text>
                <Button
                  title = "Go to Details"
                 onPress= {()=> this.props.navigation.navigate('Details')}
        />
            </View>
        );
    }
}

export default TestScreen;


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }

})
