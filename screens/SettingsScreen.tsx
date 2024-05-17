import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';
import colors from '../constants/colors';
import Header from '../components/global/Header';
import ThemeBlock from '../components/settings/ThemeBlock';

export default function SettingsScreen() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[themeColor].bg}]}>
      <Header title="Settings" />
      <ThemeBlock />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
