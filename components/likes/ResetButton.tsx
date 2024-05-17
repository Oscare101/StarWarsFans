import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux';
import {updateLikedCharacters} from '../../redux/likedCharacters';
import colors from '../../constants/colors';

const width = Dimensions.get('screen').width;

export default function ResetButton() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const dispatch = useDispatch();

  function ResetLikedCharacters() {
    dispatch(updateLikedCharacters([]));
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={ResetLikedCharacters}>
      <Text style={[styles.buttonTitle, {color: colors[themeColor].red.main}]}>
        Reset
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: width * 0.02,
    height: width * 0.15,
    // width: '92%',
    borderRadius: width * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {fontSize: width * 0.05, fontWeight: '300'},
});
