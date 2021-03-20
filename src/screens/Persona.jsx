import React from "react";
import { StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  useIsDrawerOpen,
} from "@react-navigation/drawer";
import {
  Container,
  Header,
  Left,
  Body,
  Content,
  Text,
  Title,
  Button,
  Icon,
  Right,
} from "native-base";

const Persona = () => {
  const PersonaDrawer = createDrawerNavigator();
  const ViewProfile = ({ navigation }) => (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.toggleDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>View Profile</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => navigation.goBack()}>
            <Text>BACK</Text>
          </Button>
        </Right>
      </Header>
      <Content padder>
        <Text>View Profile screen!</Text>
        <Button onPress={() => navigation.navigate("Edit Profile")}>
          <Text>Go to Edit Profile</Text>
        </Button>
      </Content>
    </Container>
  );

  const EditProfile = ({ navigation }) => (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.toggleDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Edit Profile</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => navigation.goBack()}>
            <Text>BACK</Text>
          </Button>
        </Right>
      </Header>
      <Content padder>
        <Text>Edit Profile screen!</Text>
      </Content>
    </Container>
  );

  return (
    <PersonaDrawer.Navigator initialRouteName="View Profile">
      <PersonaDrawer.Screen name="View Profile" component={ViewProfile} />
      <PersonaDrawer.Screen name="Edit Profile" component={EditProfile} />
    </PersonaDrawer.Navigator>
  );
};

export default Persona;

const styles = StyleSheet.create({});
