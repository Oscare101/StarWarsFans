import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import React, {useEffect} from 'react';
import colors from '../constants/colors';
import {useDispatch} from 'react-redux';
import {MMKV} from 'react-native-mmkv';
import {updateTheme} from '../redux/theme';
import {updateLikedCharacters} from '../redux/likedCharacters';

export const storage = new MMKV();
const width = Dimensions.get('screen').width;

export default function LaunchScreen({navigation}: any) {
  const themeColor: any = useColorScheme();
  const dispatch = useDispatch();

  function GetStorage() {
    const themeStorage = storage.getString('theme');
    if (themeStorage && themeStorage.length) {
      dispatch(updateTheme(themeStorage));
    } else {
      dispatch(updateTheme('system'));
      storage.set('theme', 'system');
    }

    const likedCharactersStorage = storage.getString('likedCharacters');
    if (likedCharactersStorage && JSON.parse(likedCharactersStorage).length) {
      dispatch(updateLikedCharacters(JSON.parse(likedCharactersStorage)));
    }

    navigation.reset({
      index: 0,
      routes: [{name: 'MainScreen'}],
    });
  }

  useEffect(() => {
    GetStorage();
  }, []);

  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
