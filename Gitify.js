import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import ExploreScreen from "./screens/ExploreScreen";
import HomeScreen from "./screens/HomeScreen";
import NotificationScreen from "./screens/NotificationScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createStackNavigator();

export default function gitify() {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Explore" component={ExploreScreen} />
    </Stack.Navigator>
  );
}
