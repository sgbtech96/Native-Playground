import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Container,
  Content,
  Text,
  Header,
  Button,
  Left,
  Body,
  Icon,
  Title,
} from "native-base";

const Balance = ({ navigation }) => {
  useEffect(() => {
    console.warn("Balance mounted!");
    return () => {
      console.warn("Balance unmounted!");
    };
  });
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Balance Screen</Title>
        </Body>
      </Header>
      <Content padder>
        <Text>Balance Screen</Text>
        {/* <Button onPress={() => navigation.push("Todos")}>
          <Text>Go to Balance Screen Again</Text>
        </Button> */}
      </Content>
    </Container>
  );
};

const Todos = ({ navigation }) => {
  useEffect(() => {
    console.warn("Todos mounted!");
    return () => {
      console.warn("Todos unmounted!");
    };
  });
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Todo Screen</Title>
        </Body>
      </Header>
      <Content padder>
        <Text>Todos Screen</Text>
        <Button onPress={() => navigation.navigate("Dashboard")}>
          <Text>Go to Dashboard Screen</Text>
        </Button>
      </Content>
    </Container>
  );
};

const Cart = ({ navigation }) => {
  useEffect(() => {
    console.warn("Cart mounted!");
    return () => {
      console.warn("Cart unmounted!");
    };
  });
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Cart Screen</Title>
        </Body>
      </Header>
      <Content padder>
        <Text>Cart Screen</Text>
        <Button onPress={() => navigation.navigate("Dashboard")}>
          <Text>Go to Dashboard</Text>
        </Button>
      </Content>
    </Container>
  );
};

const Details = () => {
  useEffect(() => {
    return () => {
      console.warn("Details unmounted!");
    };
  }, []);
  const DetailsTabs = createBottomTabNavigator();
  return (
    <DetailsTabs.Navigator>
      <DetailsTabs.Screen name="Balance" component={Balance} />
      <DetailsTabs.Screen name="Todos" component={Todos} />
      <DetailsTabs.Screen name="Cart" component={Cart} />
    </DetailsTabs.Navigator>
  );
};

export default Details;

const styles = StyleSheet.create({});
