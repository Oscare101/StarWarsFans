import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, {memo} from 'react';
import {RootState} from '../../redux';
import {useSelector} from 'react-redux';
import colors from '../../constants/colors';
import {
  GetFilteredFemaleCharacters,
  GetFilteredMaleCharacters,
  GetFilteredOtherCharacters,
} from '../../functions/functions';
import {useNavigation} from '@react-navigation/native';
import Icon from '../icons/Icon';
import {Character} from '../../constants/interfaces';
import Header from '../global/Header';

const width = Dimensions.get('screen').width;

function MainHeader() {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const likedCharacters: Character[] = useSelector(
    (state: RootState) => state.likedCharacters,
  );
  const navigation: any = useNavigation();
  const data = [
    {
      title: 'male',
      value: GetFilteredMaleCharacters(likedCharacters),
    },
    {
      title: 'female',
      value: GetFilteredFemaleCharacters(likedCharacters),
    },
    {
      title: 'other',
      value: GetFilteredOtherCharacters(likedCharacters),
    },
  ];

  return (
    <>
      <Header title="Star Wars Characters" action="settings" />

      <View style={styles.row}>
        {data.map((item: any, index: number) => (
          <TouchableOpacity
            style={[
              styles.likedBlock,
              {
                backgroundColor: colors[themeColor].card,
                borderColor: colors[themeColor].grey,
              },
            ]}
            key={index}
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('LikesScreen', {page: item.title});
            }}>
            <Text
              style={[styles.likedAmount, {color: colors[themeColor].main}]}>
              {item.value.length}
            </Text>
            <Text
              style={[styles.likedTitle, {color: colors[themeColor].comment}]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: width * 0.02,
    gap: width * 0.02,
  },
  title: {
    fontSize: width * 0.05,
  },
  likedBlock: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.02,
    borderWidth: 1,
  },
  likedAmount: {fontSize: width * 0.06},
  likedTitle: {fontSize: width * 0.05, fontWeight: '300'},
});

export default memo(MainHeader);
