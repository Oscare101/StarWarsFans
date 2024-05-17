import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';
import colors from '../../constants/colors';

const width = Dimensions.get('screen').width;

export default function LikedPageSelectorBlock(props: {
  page: string;
  onSelect: any;
}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const data = ['male', 'female', 'other'];

  return (
    <View style={[styles.card, {backgroundColor: colors[themeColor].card}]}>
      {data.map((item: any, index: number) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => props.onSelect(item)}
          style={[
            styles.button,
            {
              backgroundColor:
                props.page === item
                  ? colors[themeColor].bg
                  : colors[themeColor].card,
            },
          ]}>
          <Text
            style={[
              styles.buttonTitle,
              {
                color:
                  props.page === item
                    ? colors[themeColor].main
                    : colors[themeColor].comment,
              },
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: width * 0.02,
    gap: width * 0.01,
    padding: width * 0.01,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: width * 0.01,
    borderRadius: width * 0.01,
  },
  buttonTitle: {fontSize: width * 0.04},
});
