import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Button,
  AsyncStorage
} from 'react-native';
import { 
  createSwitchNavigator, 
  createStackNavigator, 
  createAppContainer 
} from 'react-navigation';

import AuthLoadingScreen from './src/screen/AuthLoadingScreen'
import SignInScreen from './src/screen/SignInScreen'
import RegisterScreen from './src/screen/RegisterScreen'

const HomeScreen = props => {
  _logout = () => {
    AsyncStorage.clear()
    props.navigation.navigate('Auth')
  }

  return (
  <View style={styles.container}>
    <Text style={{fontSize:30}}>Home Screen</Text>
    <Button title="GO TO OTHER SCREEN" onPress={() => props.navigation.navigate('Other')}/>
    <Text></Text>
    <Button title="LOGOUT" onPress={this._logout}/>
  </View>
)}

const OtherScreen = props => (
  <View style={styles.container}>
    <Text style={{fontSize:30}}>Other Screen</Text>
  </View>
)

const DashboardStack = createStackNavigator({
  Home: HomeScreen,
  Other: OtherScreen
})
const AuthStack = createStackNavigator({ 
  SignIn: SignInScreen,
  Register: RegisterScreen 
});

const App = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      Dashboard: DashboardStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});