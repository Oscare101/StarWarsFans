import {StatusBar, StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import MainNavigation from '../navigation/MainNavigation';
import colors from '../constants/colors';
import {Theme} from '../constants/interfaces';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';

export default function AppComponent() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: Theme['value'] = theme === 'system' ? systemTheme : theme;

  return (
    <>
      <StatusBar
        barStyle={themeColor === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors[themeColor].bg}
      />
      <NavigationContainer
        theme={themeColor === 'dark' ? DarkTheme : DefaultTheme}>
        <MainNavigation />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
