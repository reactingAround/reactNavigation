import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import PassingParametersScreen from './screens/PassingParametersScreen'
import HeaderTitleScreen from './screens/HeaderTitleScreen'
import TestScreen from './screens/TestScreen'
import MainScreen from './Components/MainScreen'
import LogoScreen from './screens/LogoScreen'
class DetailsScreen extends React.Component{
  static navigationOptions = {
    title : 'Details',
  /*  headerStyle : {
      backgroundColor : '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
    */

  }

  render(){
    return(
      <View style= {{flex:1, alignItems: 'center',justifyContent:'center'}}>
        <Text>Details Screen</Text>
        <Button
          title= "LogoScreen"
          onPress = {()=> this.props.navigation.navigate('Logo')}
        />
        <Button 
          title = "testScreen"
          onPress={()=> this.props.navigation.navigate('Test')}
        />
        <Button
          title = "Go to Details again"
          onPress = {()=> this.props.navigation.push('Details')} 
        />
        <Button
          title = "Go to Details"
          onPress= {()=> this.props.navigation.navigate('Details')}
        />
        <Button 
        title = "Go to Profile"
        onPress = {()=> this.props.navigation.navigate('Profile')}
        />
        <Button 
        title = "Go to Home"
        onPress = {()=> this.props.navigation.navigate('Home')}
        />
        <Button 
        title = "Go to Login"
        onPress = {()=> this.props.navigation.navigate('Login')}
        />
        <Button
         title = "Go Back"
         onPress = {()=> this.props.navigate.goBack()}
        />
        <Button 
         title = "Passing Arguments"
         onPress = {()=> this.props.navigation.navigate('PassingParameters',{
                        itemId:186,
                        otherParam : 'Nukigation Reaktor',
                       })
                      }
        />
        <Button
          title = "HeaderTitleScreen"
          onPress = {()=> this.props.navigation.navigate('HeaderTitle')}
        />
      <Button
          title = "MainScreen"
          onPress = {()=> this.props.navigation.navigate('Main')}
      />
      </View>
      
    )
  }
}

class ProfileScreen extends React.Component{
  static navigationOptions = {
    title : 'Profile'
  }
  render(){
    return(
      <View style = {{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'steelblue'}}>
        <Text style={{color:'white'}}>Profile</Text>
        <Button
          title = "Go to Details"
          onPress= {()=> this.props.navigation.navigate('Details')}
        />
        <Button 
        title = "Go to Profile"
        onPress = {()=> this.props.navigation.navigate('Profile')}
        />
        <Button 
        title = "Go to Home"
        onPress = {()=> this.props.navigation.navigate('Home')}
        />
        <Button 
        title = "Go to Login"
        onPress = {()=> this.props.navigation.navigate('Login')}
        />
        <Button
         title = "Go Back"
         onPress = {()=> this.props.navigation.goBack()}
        />
        <Button
         title = "Go to the default page"
         onPress = {()=> this.props.navigation.popToTop()}
        />
      </View>
      

    );
  }
}

class LoginScreen extends React.Component{
  static navigationOptions = {
    title: 'Login'
  }
  
  render(){
    return(
      <View style= {{flex:1, alignItems: 'center',justifyContent:'center'}}>
        <Text>Login Screen</Text>
        <Button
          title = "Go to Details"
          onPress= {()=> this.props.navigation.navigate('Details')}
        />
        <Button 
        title = "Go to Profile"
        onPress = {()=> this.props.navigation.navigate('Profile')}
        />
        <Button 
        title = "Go to Home"
        onPress = {()=> this.props.navigation.navigate('Home')}
        />
        <Button 
        title = "Go to Login"
        onPress = {()=> this.props.navigation.navigate('Login')}
        />
      </View>
    )
  }
}

class HomeScreen extends React.Component{
  static navigationOptions = {
    title: 'Home'
  }
  render(){
    return(
      <View style = {{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'steelblue'}}>
        <Text style={{color:'white'}}>Home</Text>
        <Button
          title = "Go to Details"
          onPress= {()=> this.props.navigation.navigate('Details')}
        />
        <Button 
        title = "Go to Profile"
        onPress = {()=> this.props.navigation.navigate('Profile')}
        />
        <Button 
        title = "Go to Home"
        onPress = {()=> this.props.navigation.navigate('Home')}
        />
        <Button 
        title = "Go to Login"
        onPress = {()=> this.props.navigation.navigate('Login')}
        />
      </View>

    );
  }
}



const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details : DetailsScreen,
  Login : LoginScreen,
  Profile: ProfileScreen,
  PassingParameters : PassingParametersScreen,
  HeaderTitle : HeaderTitleScreen,
  Test : TestScreen,
  Main : MainScreen,
  Logo : LogoScreen,

},{
  initialRouteName: 'Details',
  navigationOptions : {
    headerStyle :{
      backgroundColor : '#d5d5ee',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}