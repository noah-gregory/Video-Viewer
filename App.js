import { StyleSheet, Text, View } from 'react-native';
import React from "react";
//import VideoScreen from './src/components/app/VideoScreen';
import IPConnectScreen from "./src/components/app/IPConnectScreen";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const navigatorOptions = {
  flex: 1, backgroundColor: '#2E3030'
}

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="IPConnect Screen"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' }
        }}>
        <Stack.Screen
          name="Video Screen"
          component={VideoScreen}
          options={{ animation: 'none' }}
        />
        <Stack.Screen
          name="IPConnect Screen"
          component={IPConnectScreen}
          options={{ animation: 'none' }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});