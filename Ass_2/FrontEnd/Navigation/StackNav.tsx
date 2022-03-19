import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import UniList from "../Screens/UniList";
import SearchResults from "../Screens/SearchResults";
import Home from "../Screens/Home";

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="UniList"
        component={UniList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchResults"
        component={SearchResults}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
