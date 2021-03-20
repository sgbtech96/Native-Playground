import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
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
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";

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

  const EditProfile = ({ navigation }) => {
    const [url, setUrl] = useState(null);
    let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }

      let pickerResult = await ImagePicker.launchImageLibraryAsync();

      setUrl(pickerResult.uri);
    };

    let openShareDialogAsync = async () => {
      if (!(await Sharing.isAvailableAsync())) {
        alert(`Uh oh, sharing isn't available on your platform`);
        return;
      }

      await Sharing.shareAsync(url);
    };
    return (
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
          <Image source={{ uri: url }} style={styles.image} />
          <Button onPress={openImagePickerAsync}>
            <Text>Pick an Image</Text>
          </Button>
          <Button onPress={openShareDialogAsync}>
            <Text>Share the Image</Text>
          </Button>
        </Content>
      </Container>
    );
  };

  return (
    <PersonaDrawer.Navigator initialRouteName="View Profile">
      <PersonaDrawer.Screen name="View Profile" component={ViewProfile} />
      <PersonaDrawer.Screen name="Edit Profile" component={EditProfile} />
    </PersonaDrawer.Navigator>
  );
};

export default Persona;

const styles = StyleSheet.create({
  image: {
    height: 220,
    width: 240,
  },
});
