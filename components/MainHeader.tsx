import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';
import colors from '../constants/colors';
import Icon from './Icon';

const width = Dimensions.get('screen').width;

export default function MainHeader() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const likedCharacters: any[] = useSelector(
    (state: RootState) => state.likedCharacters,
  );

  return (
    <View style={[styles.header, {backgroundColor: colors[themeColor].bg}]}>
      <TouchableOpacity>
        <Icon
          icon="settings"
          color={colors[themeColor].main}
          size={width * 0.06}
        />
      </TouchableOpacity>
      <Text style={[styles.title, {color: colors[themeColor].main}]}>
        Star Wars Characters
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: width * 0.02,
  },
  title: {
    fontSize: width * 0.05,
  },
});
