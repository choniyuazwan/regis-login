import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View
} from 'react-native';

class RegisterScreen extends Component {
  static navigationOptions = {
    title : 'REGISTER'
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={{fontSize:30}}>RegisterScreen</Text>
      </View>
    )
  }
}
export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});