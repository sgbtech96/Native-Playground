import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Left,
  Body,
  Right,
  Title,
  Text,
  Icon,
  Footer,
  Button,
} from "native-base";

const Dashboard = ({ route, navigation }) => {
  useEffect(() => {
    return () => {
      console.warn("Dashboard unmounted!");
    };
  }, []);
  const { itemId } = route.params;
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Dashboard</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Text>Hey! This is your Dashboard with itemId: {itemId}</Text>
        <Button
          onPress={() =>
            navigation.push("Dashboard", {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        >
          <Text>Go to Dashboard again</Text>
        </Button>
        <Button onPress={() => navigation.popToTop()}>
          <Text>Go back to first screen on the stack</Text>
        </Button>
        <Button
          onPress={() =>
            navigation.navigate("Dashboard", {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        >
          <Text>Navigate to Dashboard</Text>
        </Button>
        <Button
          onPress={() =>
            navigation.setParams({
              itemId: 101,
            })
          }
        >
          <Text>Update itemId</Text>
        </Button>
        <Button onPress={() => navigation.navigate("Details")}>
          <Text>Go to Details</Text>
        </Button>
        <Button onPress={() => navigation.navigate("Cart")}>
          <Text>Go to Cart</Text>
        </Button>
      </Content>
      <Footer />
    </Container>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
