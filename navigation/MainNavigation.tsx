import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import LaunchScreen from '../screens/LaunchScreen';

const Stack = createStackNavigator();

export default function MainNavigation() {
  const navigationLogIn = (
    <Stack.Navigator initialRouteName="LaunchScreen">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="LaunchScreen"
        component={LaunchScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="MainScreen"
        component={MainScreen}
      />
    </Stack.Navigator>
  );

  return <>{navigationLogIn}</>;
}
