import {Dimensions, StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import Icon from '../icons/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootState} from '../../redux';
import {useDispatch, useSelector} from 'react-redux';
import {updateLikedCharacters} from '../../redux/likedCharacters';
import {GetUpdatedLikedCharacters} from '../../functions/functions';

const width = Dimensions.get('screen').width;

export default function LikeBlock(props: {character: any}) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const likedCharacters: any[] = useSelector(
    (state: RootState) => state.likedCharacters,
  );

  const dispatch = useDispatch();

  function LikeCharacter() {
    dispatch(
      updateLikedCharacters(
        GetUpdatedLikedCharacters(likedCharacters, props.character),
      ),
    );
  }

  const liked: boolean = likedCharacters.find(
    (c: any) => c.name === props.character.name,
  );

  return (
    <TouchableOpacity
      style={[styles.likeButton, {backgroundColor: colors[themeColor].card}]}
      activeOpacity={0.8}
      onPress={LikeCharacter}>
      <Text style={[styles.likeTitle, {color: colors[themeColor].grey}]}>
        {liked ? 'liked' : 'like'}
      </Text>
      <Icon
        icon={liked ? 'heartFull' : 'heart'}
        color={liked ? colors[themeColor].accent : colors[themeColor].comment}
        size={width * 0.06}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  likeButton: {
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: width * 0.02,
    borderRadius: width * 0.02,
  },
  likeTitle: {fontSize: width * 0.05},
});
