import React, {Component} from 'react';
import {
  StyleSheet, 
  // Text, 
  View,
  // Button,
  AsyncStorage,
  Dimensions,
  Image
} from 'react-native';
import { 
  createSwitchNavigator, 
  createStackNavigator, 
  createAppContainer,
  ScrollView,
  createBottomTabNavigator
} from 'react-navigation';

import AuthLoadingScreen from './src/screen/AuthLoadingScreen'
import SignInScreen from './src/screen/SignInScreen'
import RegisterScreen from './src/screen/RegisterScreen'

// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import LucyChat from "./LucyChat.js";
import JadeChat from "./JadeChat.js";
import NineChat from "./NineChat.js";
import { TabNavigator } from "react-navigation";
import {
  Button,
  Text,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label
} from "native-base";

const MainScreenNavigator = createBottomTabNavigator(
  {
    LucyChat: { screen: props => <LucyChat {...props} /> },
    JadeChat: { screen: props => <JadeChat {...props} /> },
    NineChat: { screen: props => <NineChat {...props} /> }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              // active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("LucyChat")}
            >
              <Icon name="bowtie" />
              <Text>Lucy</Text>
            </Button>
            <Button
              vertical
              // active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("JadeChat")}
            >
              <Icon name="briefcase" />
              <Text>Nine</Text>
            </Button>
            <Button
              vertical
              // active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("NineChat")}
            >
              <Icon name="headset" />
              <Text>Jade</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
)


// const HomeScreen = props => {
//   _logout = () => {
//     AsyncStorage.clear()
//     props.navigation.navigate('Auth')
//   }

//   return (
//   <View style={styles.container}>
//     <Text style={{fontSize:30}}>Home Screen</Text>
//     <Button title="GO TO OTHER SCREEN" onPress={() => props.navigation.navigate('Other')}/>
//     <Text></Text>
//     <Button title="LOGOUT" onPress={this._logout}/>
//   </View>
// )}

// const OtherScreen = props => (
//   <View style={styles.container}>
//     <Text style={{fontSize:30}}>Other Screen</Text>
//   </View>
// )

// const DashboardStack = createStackNavigator({
//   Home: HomeScreen,
//   Other: OtherScreen
// })
const AuthStack = createStackNavigator({ 
  SignIn: SignInScreen,
  Register: RegisterScreen 
},
{
  headerMode: 'none'
});

const App = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      // Dashboard: DashboardStack,
      Dashboard: MainScreenNavigator,
      // Dashboard: BottomTabMaterial,
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
    alignItems: 'center'
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4,
  },
  item: {
    height: Dimensions.get('window').width / 2,
    width: '50%',
    padding: 4,
  },
  photo: {
    flex: 1,
    resizeMode: 'cover',
  },
});
