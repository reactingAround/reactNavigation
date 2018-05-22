import React, {Component} from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';


class PassingParametersScreen extends Component{
    static navigationOptions = {
        title : 'Passing Parameters'
    }
    render(){
            const {navigation} = this.props;
            const itemId = navigation.getParam('itemId','NO-ID');
            const otherParam = navigation.getParam('otherParam','hello world');


        return(
            <View style = {styles.container}>
              <Text>PassingParametersScreen</Text>
              <Text>itemId : {JSON.stringify(itemId)}</Text>
              <Text> otherParam : {JSON.stringify(otherParam)}</Text>
              <Button 
                title = "Go to Details again"
                onPress = {()=> this.props.navigation.push('Details',{
                    itemId : Math.floor(Math.random()*100),
                }) }
              />
              
               <Button title="Go to Home Screen"
                       onPress = {() => this.props.navigation.navigate('Home')}/>
                
            </View>
        );
    }
}

export default PassingParametersScreen;


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }

})