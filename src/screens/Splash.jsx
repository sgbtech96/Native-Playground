import React from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Footer,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
  Icon,
  FooterTab,
  Accordion,
  Badge,
  Card,
  CardItem,
} from "native-base";

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
];

const Splash = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        {/* <Accordion dataArray={dataArray} expanded={[0]} />
        <Badge success>
          <Text>6</Text>
        </Badge> */}
        <Button onPress={() => navigation.navigate("Dashboard")}>
          <Text>Go to Dashboard</Text>
        </Button>
        <Button
          onPress={() =>
            navigation.navigate("Details", {
              screen: "Todos",
              params: {
                text: "random text here...",
              },
            })
          }
        >
          <Text>Go to Details</Text>
        </Button>
        <Button onPress={() => navigation.navigate("Persona")}>
          <Text>Go to Persona</Text>
        </Button>
        {/* <Card>
          <CardItem header>
            <Text>Geeky Ants</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>This is Card Item 2</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>Check</Text>
          </CardItem>
        </Card> */}
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default Splash;

const styles = StyleSheet.create({});
