import {StatusBar, useColorScheme} from 'react-native';
import React, {useEffect} from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import MainNavigation from '../navigation/MainNavigation';
import colors from '../constants/colors';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export default function AppComponent() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const likedCharacters: any[] = useSelector(
    (state: RootState) => state.likedCharacters,
  );

  useEffect(() => {
    if (likedCharacters.length) {
      storage.set('likedCharacters', JSON.stringify(likedCharacters));
    }
  }, [likedCharacters]);

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
