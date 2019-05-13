import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Button,
  AsyncStorage
} from 'react-native';

class SignInScreen extends Component {
  static navigationOptions = {
    title : 'LOGIN'
  }

  _login = async () => {
    let userToken = await AsyncStorage.setItem('userToken', 'ABCDE')
    this.props.navigation.navigate('Dashboard')
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={{fontSize:30}}>SignInScreen</Text>
        <Button title="Login" onPress={this._login}/>
        <Text></Text>
        <Button title="Register" onPress={() => this.props.navigation.navigate("Register")}/>
      </View>
    )
  }
}
export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});