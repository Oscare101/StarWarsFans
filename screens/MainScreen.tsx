import {
  Button,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {GetDataRequest} from '../functions/actions';
import {useDispatch, useSelector} from 'react-redux';
import {updateStarWarsData} from '../redux/starWarsDataSlice';
import {RootState} from '../redux';
import colors from '../constants/colors';
import {StarWarsData, Theme} from '../constants/interfaces';
import RenderCharacterItem from '../components/RenderCharacterItem';
import PageSelectorBlock from '../components/PageSelectorBlock';
import LoadingWarning from '../components/LoadingWarning';
import {updateLikedCharacters} from '../redux/likedCharacters';
import MainHeader from '../components/MainHeader';

const width = Dimensions.get('screen').width;

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
      if (likedCharacters.find((c: any) => c.name === character.name)) {
        const filteredCharacters = likedCharacters.filter(
          (c: any) => c.name !== character.name,
        );
        dispatch(updateLikedCharacters(filteredCharacters));
      } else {
        dispatch(updateLikedCharacters([...likedCharacters, character]));
      }
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
          ItemSeparatorComponent={() => <View style={{height: width * 0.01}} />}
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
