import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';

const Stack = createStackNavigator();

export default function MainNavigation() {
  const navigationLogIn = (
    <Stack.Navigator initialRouteName="MainScreen">
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
