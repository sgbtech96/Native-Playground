import React, { useContext, useState } from "react";
import { StyleSheet, Platform } from "react-native";
import {
  Container,
  Header,
  Content,
  Body,
  Title,
  Button,
  Text,
} from "native-base";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [showInfo, setShowInfo] = useState(false);
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
        <Button onPress={() => setShowInfo(true)}>
          <Text>Get device OS info</Text>
        </Button>
        {showInfo && (
          <Text>
            {Platform.OS} {Platform.Version}
          </Text>
        )}
      </Content>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});
