import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, {memo} from 'react';
import Icon from './Icon';
import {RootState} from '../redux';
import {useSelector} from 'react-redux';
import colors from '../constants/colors';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('screen').width;

function Header(props: {title: string}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const navigation = useNavigation();

  return (
    <View style={[styles.header]}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon
          icon="chevronLeft"
          color={colors[themeColor].main}
          size={width * 0.09}
        />
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        style={[styles.title, {color: colors[themeColor].main}]}>
        {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '92%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    height: width * 0.1,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontSize: width * 0.07, flex: 1, textAlign: 'right'},
});

export default memo(Header);
