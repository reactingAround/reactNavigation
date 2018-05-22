import React, {Component} from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';


class HeaderTitleScreen extends Component{
    static navigationOptions = {
        title : 'HeaderTitleScreen',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            fontWeight: 'bold',
        },
    };

    render(){
        return(
            <View style = {styles.container}>
                <Text> HeaderTitleScreen</Text>
                <Button
                  title = "Go to Details"
                 onPress= {()=> this.props.navigation.navigate('Details')}
        />
            </View>
        );
    }
}

export default HeaderTitleScreen;


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }

})