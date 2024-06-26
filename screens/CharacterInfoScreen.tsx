import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux';
import colors from '../constants/colors';
import Icon from '../components/icons/Icon';
import Header from '../components/global/Header';
import {updateLikedCharacters} from '../redux/likedCharacters';
import {GetUpdatedLikedCharacters} from '../functions/functions';
import LikeBlock from '../components/character/LikeBlock';
import {Character} from '../constants/interfaces';

const width = Dimensions.get('screen').width;

export default function CharacterInfoScreen({navigation, route}: any) {
  const character: Character = route.params.character;

  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  const info = [
    {title: 'Birth year', value: character.birth_year},
    {title: 'Gender', value: character.gender},
    {title: 'Home planet', value: character.info.homeworld.name},
    {
      title: 'Species',
      value: character.info.species.map((i: any) => i.name).join(',') || '???',
    },
    {
      title: 'Movies',
      value: character.info.films.map((i: any) => i.title).join('\n') || '???',
    },
    {
      title: 'Starships',
      value:
        character.info.starships.map((i: any) => i.name).join('\n') || '???',
    },
  ];

  function RenderCharacterInfo({item}: any) {
    return (
      <View style={styles.characterInfoRow}>
        <Text style={[styles.infoTitle, {color: colors[themeColor].grey}]}>
          {item.title}
        </Text>
        <Text style={[styles.infoValue, {color: colors[themeColor].main}]}>
          {item.value}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[themeColor].bg}]}>
      <Header title={character.name} action="back" />
      <View style={[styles.card, {backgroundColor: colors[themeColor].card}]}>
        <FlatList
          data={info}
          renderItem={RenderCharacterInfo}
          ItemSeparatorComponent={() => (
            <View
              style={[
                styles.line,
                {backgroundColor: colors[themeColor].comment},
              ]}
            />
          )}
        />
      </View>
      <LikeBlock character={character} />
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
  card: {
    width: '92%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: width * 0.02,
    borderRadius: width * 0.02,
    gap: width * 0.01,
  },
  characterInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  infoTitle: {fontSize: width * 0.05},
  infoValue: {fontSize: width * 0.05, textAlign: 'right'},
  line: {
    width: '100%',
    height: 1,
    marginVertical: width * 0.01,
    opacity: 0.3,
  },
});
