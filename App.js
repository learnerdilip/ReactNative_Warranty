import "react-native-gesture-handler";
import * as React from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import Login from "./screens/user/Login";
import Signup from "./screens/user/Signup";
import store from "./assets/store";

const Stack = createStackNavigator();

function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Welcome" }}
            />
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={{ title: "Details Page" }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: "Please Login" }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ title: "Please Signup" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}

export default App;

// AppRegistry.registerComponent("App", () => App);
