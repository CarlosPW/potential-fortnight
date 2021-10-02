import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InitialScreen from "./components/screens/InitialScreen";
import { LoginScreen } from "./components/screens/LoginScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./components/screens/HomeScreen";
import { StateProvider } from "./components/contexts/stateContext";

export default function App() {
  return (
    <StateProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="InitialScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="InitialScreen" component={InitialScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </SafeAreaProvider>
    </StateProvider>
  );
}

const Stack = createNativeStackNavigator();
