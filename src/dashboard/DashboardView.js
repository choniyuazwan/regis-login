import React, { Component } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from "native-base";
import styles from "./styles";

class DashboardView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _logout = () => {
    AsyncStorage.clear()
    this.props.navigation.navigate('Auth')
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header noLeft>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
            <Button transparent onPress={this._logout}>
              <Icon name="person" />
            </Button>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          <Text>Header with multiple Icon Buttons</Text>
        </Content>
      </Container>
    );
  }
}

export default DashboardView;
