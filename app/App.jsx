import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/Splash';
import SignUpScreen from './src/screens/SignUp';
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import SignInScreen from './src/screens/SignIn';
import MessagesScreen from './src/screens/Messages';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}