import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Header from '../components/global/Header';
import LikedPageSelectorBlock from '../components/likes/LikedPageSelectorBlock';
import colors from '../constants/colors';
import {RootState} from '../redux';
import {useDispatch, useSelector} from 'react-redux';
import RenderCharacterItem from '../components/character/RenderCharacterItem';
import {updateLikedCharacters} from '../redux/likedCharacters';
import {
  GetFilteredFemaleCharacters,
  GetFilteredMaleCharacters,
  GetFilteredOtherCharacters,
  GetUpdatedLikedCharacters,
} from '../functions/functions';
import {Character} from '../constants/interfaces';
import ResetButton from '../components/likes/ResetButton';

const width = Dimensions.get('screen').width;

export default function LikesScreen({navigation, route}: any) {
  const [page, setPage] = useState<string>(route.params.page);

  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const likedCharacters: Character[] = useSelector(
    (state: RootState) => state.likedCharacters,
  );
  const dispatch = useDispatch();

  const LikeCharacter = useCallback(
    (character: any) => {
      dispatch(
        updateLikedCharacters(
          GetUpdatedLikedCharacters(likedCharacters, character),
        ),
      );
    },
    [likedCharacters],
  );

  function GetFilteredCharacters() {
    switch (page) {
      case 'male':
        return GetFilteredMaleCharacters(likedCharacters);
      case 'female':
        return GetFilteredFemaleCharacters(likedCharacters);
      case 'other':
        return GetFilteredOtherCharacters(likedCharacters);
    }
  }

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[themeColor].bg}]}>
      <Header title="Characters you liked" />
      <LikedPageSelectorBlock
        page={page}
        onSelect={(value: string) => setPage(value)}
      />

      <FlatList
        data={GetFilteredCharacters()}
        renderItem={(item: any) => (
          <RenderCharacterItem
            item={item.item}
            theme={themeColor}
            onLikeCharacter={() => {
              LikeCharacter(item.item);
            }}
            liked={
              !!likedCharacters.find((c: any) => c.name === item.item.name)
            }
            onNavigation={() => {
              navigation.navigate('CharacterInfoScreen', {
                character: item.item,
              });
            }}
          />
        )}
      />
      <ResetButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: width * 0.02,
  },
});