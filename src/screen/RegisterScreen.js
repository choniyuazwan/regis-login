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
  Text
} from "native-base";
import styles from "./styles";

class RegisterScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Register</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
          <Item floatingLabel>
              <Label>Firstname</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Lastname</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Birthdate</Label>
              <Input />
            </Item>
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
            <Text>Register</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default RegisterScreen;
