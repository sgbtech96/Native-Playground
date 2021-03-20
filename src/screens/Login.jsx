import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Body,
  Title,
  Button,
  Text,
} from "native-base";
import { AuthContext } from "../../App";

const Login = () => {
  const AuthContext = useContext(AuthContext);
  console.warn(AuthContext);
  return (
    <Container>
      <Header>
        <Body>
          <Title>Welcome to Playground</Title>
        </Body>
      </Header>
      <Content padder>
        <Button onPress={() => signIn()}>
          <Text>Login</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});