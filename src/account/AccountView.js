import React, { Component } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right
} from "native-base";
import styles from "./styles";

class AccountView extends Component {
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
            <Title>Account</Title>
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
          <Card style={styles.mb}>
            
            <CardItem bordered>
              <Text>0283487487392</Text>
            </CardItem>

            <CardItem bordered footer>
              <Body>
                <Text>
                  rekening 1
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered footer>
              <Body>
                <Text>
                  500000
                </Text>
              </Body>
            </CardItem>
            
            <CardItem bordered footer>
              <Body>
                <Text>
                  500000
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered footer>
              <Body>
                <Text>
                  12 mei 2018
                </Text>
              </Body>
            </CardItem>

            <CardItem bordered footer>
              <Body>
                <Text>
                  rekening 1
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered footer>
              <Body>
                <Text>
                  500000
                </Text>
              </Body>
            </CardItem>

            <CardItem footer bordered>
              <Body/>
              <Button >
                  <Icon active name="search" />
              </Button>
              <Body/>
              <Button >
                  <Icon active name="search" />
              </Button>
              <Body/>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default AccountView;
