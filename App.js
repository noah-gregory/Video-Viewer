import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

export default function App() {
  return(
    <NavigationContainer theme={DarkTheme}>
    <Stack.Navigator initialRouteName="IPConnect Screen"
     screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: 'transparent' }
  }}>
      <Stack.Screen 
        name="Video Screen" 
        component={VideoScreen}   
        options={{ animation: 'none'}}
      />
      <Stack.Screen 
        name="IPConnect Screen" 
        component={IPConnectScreen}
        options={{ animation: 'none'}}
 
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