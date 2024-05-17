import {FlatList, SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {GetDataRequest} from '../functions/actions';
import {useDispatch, useSelector} from 'react-redux';
import {updateStarWarsData} from '../redux/starWarsDataSlice';
import {RootState} from '../redux';
import colors from '../constants/colors';
import {StarWarsData} from '../constants/interfaces';
import RenderCharacterItem from '../components/RenderCharacterItem';
import PageSelectorBlock from '../components/PageSelectorBlock';
import LoadingWarning from '../components/LoadingWarning';
import {updateLikedCharacters} from '../redux/likedCharacters';
import MainHeader from '../components/MainHeader';
import {GetUpdatedLikedCharacters} from '../functions/functions';

export default function MainScreen({navigation}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const starWarsData: StarWarsData = useSelector(
    (state: RootState) => state.starWarsData,
  );
  const likedCharacters: any[] = useSelector(
    (state: RootState) => state.likedCharacters,
  );

  const dispatch = useDispatch();

  async function GetData(url?: string) {
    const response = await GetDataRequest(url);
    dispatch(updateStarWarsData(response));
  }

  useEffect(() => {
    GetData();
  }, []);

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

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[themeColor].bg}]}>
      <MainHeader />
      {starWarsData?.results?.length ? (
        <FlatList
          data={starWarsData.results}
          renderItem={(item: any) => (
            <RenderCharacterItem
              item={item.item}
              theme={themeColor}
              onLikeCharacter={() => {
                LikeCharacter(item.item);
              }}
              liked={likedCharacters.find(
                (c: any) => c.name === item.item.name,
              )}
              onNavigation={() => {
                navigation.navigate('CharacterInfoScreen', {
                  character: item.item,
                });
              }}
            />
          )}
        />
      ) : (
        <LoadingWarning />
      )}
      <PageSelectorBlock />
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
