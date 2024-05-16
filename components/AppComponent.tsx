import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import MainNavigation from '../navigation/MainNavigation';

export default function AppComponent() {
  const themeColor = 'dark';
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        // backgroundColor={colors[themeColor].bg}
      />
      <NavigationContainer
        theme={themeColor === 'dark' ? DarkTheme : DefaultTheme}>
        <MainNavigation />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
