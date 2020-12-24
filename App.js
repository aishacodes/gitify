import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Index from "./Gitify";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Index />
    </NavigationContainer>
  );
}
