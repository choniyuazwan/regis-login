import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Button,
  AsyncStorage,
  Dimensions,
  Image
} from 'react-native';
import { 
  createSwitchNavigator, 
  createStackNavigator, 
  createAppContainer,
  ScrollView
} from 'react-navigation';

import AuthLoadingScreen from './src/screen/AuthLoadingScreen'
import SignInScreen from './src/screen/SignInScreen'
import RegisterScreen from './src/screen/RegisterScreen'

import DashboardView from './src/dashboard/DashboardView'
import AccountView from './src/account/AccountView'
import WalletView from './src/wallet/WalletView'
import WalletAccountView from './src/wallet-account/WalletAccountView'
import TransactionView from './src/transaction/TransactionView'
import ProfileView from './src/profile/ProfileView'

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const PhotoGrid = ({id}) => {
//   const PHOTOS = Array.from({ length: 24 }).map(
//     (_, i) => `https://unsplash.it/300/300/?random&__id=${id}${i}`
//   );

//   return (
//     <ScrollView contentContainerStyle={styles.content}>
//       {PHOTOS.map(uri => (
//         <View key={uri} style={styles.item}>
//           <Image source={{ uri }} style={styles.photo} />
//         </View>
//       ))}
//     </ScrollView>
//   );
// }

// const Album = () => <PhotoGrid id="album" />

// const Library = () => <PhotoGrid id="library" />

// const Favorites = () => <PhotoGrid id="favorites" />

// const Purchased = () => <PhotoGrid id="purchased" />

const tabBarIcon = name => ({ tintColor }) => (
  <MaterialIcons
    style={{ backgroundColor: 'transparent' }}
    name={name}
    color={tintColor}
    size={24}
  />
);


const BottomTabMaterial = createMaterialBottomTabNavigator(
  {
    // Dashboard:{
    //   screen: DashboardView,
    //   navigationOptions: {
    //     tabBarIcon: tabBarIcon('home'),
    //   }
    // },
    Account:{
      screen: AccountView,
      navigationOptions: {
        tabBarIcon: tabBarIcon('photo-album'),
      }
    },
    Wallet:{
      screen: WalletView,
      navigationOptions: {
        tabBarIcon: tabBarIcon('inbox'),
      }
    },
    WalletAccount:{
      screen: WalletAccountView,
      navigationOptions: {
        tabBarIcon: tabBarIcon('favorite'),
      }
    },
    Transaction:{
      screen: TransactionView,
      navigationOptions: {
        tabBarIcon: tabBarIcon('shop'),
      }
    },
    Profile:{
      screen: ProfileView,
      navigationOptions: {
        tabBarIcon: tabBarIcon('person'),
      }
    },
  },
  {
    shifting: false,
    activeColor: '#6200ee',
    inactiveColor: '#828792',
    barStyle: {
      backgroundColor: '#f8f7f9',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderStyle: 'solid',
      borderColor: '#d0cfd0',
    },
  }
);

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
      Dashboard: BottomTabMaterial,
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
