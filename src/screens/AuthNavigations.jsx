import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from "./auth/HomeScreen";
import { Avatar, IconButton } from "react-native-paper";
import { TextInput, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
const Stack = createStackNavigator();
const AuthNavigations = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: Colors.background.primary,
        },
      }}
    >
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigations;

const styles = StyleSheet.create({});
