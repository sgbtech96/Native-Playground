import { Spinner } from "native-base";
import React, { useEffect, useReducer, useMemo, createContext } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Splash from "./src/screens/Splash";
import Dashboard from "./src/screens/Dashboard";
import Details from "./src/screens/Details";
import Persona from "./src/screens/Persona";
import Login from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

const reducer = (prevState, action) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isSignedOut: false,
        userToken: action.token,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isSignedOut: true,
        userToken: null,
      };
    case "FONTS_READY":
      return {
        ...prevState,
        fontsReady: true,
      };
  }
};

const initialState = {
  isLoading: true,
  fontsReady: false,
  isSignedOut: false,
  userToken: null,
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initializeExpoFonts = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    dispatch({ type: "FONTS_READY" });
  };

  useEffect(() => {
    const extractTokenFromAsyncStorage = async () => {
      try {
        let token = await AsyncStorage.getItem("id_token");
        dispatch({ type: "RESTORE_TOKEN", token });
      } catch (e) {
        console.error(e.message);
      }
    };
    extractTokenFromAsyncStorage();
    initializeExpoFonts();
  }, []);

  const authContext = () => ({
    signIn: async (data) => {
      dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
    },
    signOut: () => {
      dispatch({ type: "SIGN_OUT" });
    },
  });

  const RootStack = createStackNavigator();

  return state.isLoading || !state.fontsReady ? (
    <Spinner size="large" />
  ) : (
    <AuthContext.Provider value={authContext}>
      {state.userToken ? (
        <NavigationContainer>
          <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="Splash" component={Splash} />
            <RootStack.Screen
              name="Dashboard"
              component={Dashboard}
              initialParams={{ itemId: -2 }}
            />
            <RootStack.Screen name="Details" component={Details} />
            <RootStack.Screen name="Persona" component={Persona} />
          </RootStack.Navigator>
        </NavigationContainer>
      ) : (
        <Login />
      )}
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
