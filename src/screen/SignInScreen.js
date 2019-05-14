import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  H1,
} from "native-base";
import styles from "./styles";

class SignInScreen extends Component {
  _login = async () => {
    let userToken = await AsyncStorage.setItem('userToken', 'ABCDE')
    this.props.navigation.navigate('Dashboard')
  }
  render() {
    return (
      <Container style={styles.container}>
        {/* <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Login</Title>
          </Body>
          <Right />
        </Header> */}

        <Content padder>
          <H1 style={styles.mb10}>Header One</H1>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }}>
            <Text>Login</Text>
          </Button>
          <Button block style={{ margin: 15, marginTop: 50 }} onPress={() => this.props.navigation.navigate("Register")}>
            <Text>Register</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default SignInScreen;





// import React, {Component} from 'react';
// import {
//   StyleSheet, 
//   Text, 
//   View,
//   Button,
//   AsyncStorage
// } from 'react-native';

// class SignInScreen extends Component {
//   _login = async () => {
//     let userToken = await AsyncStorage.setItem('userToken', 'ABCDE')
//     this.props.navigation.navigate('Dashboard')
//   }

//   render() {
//     return(
//       <View style={styles.container}>
//         <Text style={{fontSize:30}}>SignInScreen</Text>
//         <Button title="Login" onPress={this._login}/>
//         <Text></Text>
//         <Button title="Register" onPress={() => this.props.navigation.navigate("Register")}/>
//       </View>
//     )
//   }
// }
// export default SignInScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });